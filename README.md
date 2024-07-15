## Objective

Build a solution to manage and display dish information, including creating a database, API, and a front-end dashboard. The dashboard should allow toggling the published status of dishes and show real-time updates.

## Built With

- React.js
- Flask
- MaterialUI

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
- python

### Installation

1. Clone the repo
```sh
git clone https://github.com/github_username/repo_name.git
```
2. Install npm packages
```sh
cd client
npm install
```
3. Create and activate virtual python environment
```sh
cd server
python -m venv
cd venv/bin
source activate
```
4. Install pip packages
```sh
pip install -r requirements.txt
```
5. Populate the database with initial data
```sh
flask db reset
```

### Launch

- Start backend
```sh
flask run
```

- Start frontend
```sh
npm start
```

## Testing

- To test backend run
```sh
pytest
```
- To test frontend run
```sh
jest
```