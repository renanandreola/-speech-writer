from flask import Flask

app = Flask(__name__)

@app.route("/getWords")
def getWords():
    return {"test": ["Renan", "Marcos", "Andreolla", "Lise"]}

if __name__ == "__main__":
    app.run(debug=True)