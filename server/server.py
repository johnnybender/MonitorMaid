from flask import Flask, render_template, request, json
import requests
app = Flask(__name__, static_folder="../static/dist", template_folder="../static/templates")

global nextPage
nextPage = True

@app.route('/<pySession>')
def main(pySession = None):
    return render_template('/app.html')

@app.route('/launch/')
def launch():
    return render_template('launch.html')

@app.route('/index/')
def index():
    return render_template('index.html')

@app.route('/token/', methods=['GET', 'POST'])
def token():
    if request.method == 'POST':
        access = {}
        access["parameterskey"] = request.get_json()
        with open('data.json', 'w') as outfile:
            json.dump(access["parameterskey"], outfile)
        return 'PostSuccess'
    else:
        return 'GetSuccess'

@app.route('/bpjson/<bpjson>', methods=['GET', 'POST'])
def bpjson(bpjson):
    if request.method == 'POST':
        param_file = {}
        with open("./data.json", 'r') as param_file:
            data = json.load(param_file)
            service_url = data['serviceUri']
            patientID = data['patientId']
            authToken = data['accessToken']
            if bpjson == data['pyServerToken']:
                return actualRequest(service_url, patientID, authToken)

def actualRequest(service_url, patientID, authToken):
    allResults = []
    while nextPage:
        query = getFhirData(service_url, patientID, authToken) 
        if "entry" in query:
            allResults = allResults + query["entry"]
            for links in query["link"]:
                if links["relation"] == "next": 
                    global nextPage
                    nextPage = True
                    fhir_url = links["url"]
                    break
                else:
                    global nextPage
                    nextPage = False
        else:
            global nextPage
            nextPage = False
        with open('final.json', 'w') as outfile:
            json.dump(allResults, outfile)
            return 'PostSuccess'

def getFhirData(service_url, patientID, authToken):
    fhir_resource = "Observation"
    fhir_url = service_url + "/" + fhir_resource
    params = {"patient": patientID, "code": "55284-4"}
    headers = {"Authorization": "Bearer " + authToken, "Accept": 'application/json'}
    global nextPage
    nextPage = True
    fhir_client = requests.get(fhir_url, headers=headers, params=params)
    fhir_client.raise_for_status()
    results = {}
    results[0] = fhir_client.json()
    return results[0]

if __name__ == "__main__":
    app.debug = True
    app.run()