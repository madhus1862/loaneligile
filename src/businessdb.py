from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)
client = MongoClient("mongodb://localhost:27017/")
db = client.loanApplicationsDB
loan_applications_collection = db.loanApplications
def validate_form_data(data):
    required_fields = [
        "fullName",
        "loanAmount",
        "businessName",
        "businessType",
        "businessIncome",
        "businessExpenses",
    ]
    for field in required_fields:
        if not data.get(field):
            return False, f"Field {field} is required."
    if data["loanAmount"] <= 0:
        return False, "Loan amount must be greater than zero."
    if data["businessIncome"] <= 0:
        return False, "Business income must be greater than zero."
    if data["businessExpenses"] < 0:
        return False, "Business expenses cannot be negative."
    return True, "Validation passed."

@app.route("/api/loanApplications", methods=["POST"])
def create_loan_application():
    data = request.json
    print(data)
    is_valid, message = validate_form_data(data)
    if is_valid:
        try:
            loan_applications_collection.insert_one(data)
            return (
                jsonify({"message": "Your loan has been predicted successfully."}),
                201,
            )
        except Exception as e:
            return jsonify({"error": str(e)}), 400
    else:
        return jsonify({"error": message}), 400

if __name__ == "__main__":
    app.run(port=5000, debug=True)
