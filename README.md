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
2. Install npm packages (in ./client directory)
```sh
npm install
```
3. Create and activate virtual python environment (in ./server directory)
```sh
python -m venv
cd venv/bin
source activate
```
4. Install pip packages (in ./server directory)
```sh
pip install -r requirements.txt
```
5. Populate the database with initial data (in ./server directory)
```sh
flask db reset
```

### Launch

- Start backend (in ./server directory)
```sh
flask run
```

- Start frontend (in ./client directory)
```sh
npm start
```

## Testing

- To test backend run (in ./server directory)
```sh
pytest
```
- To test frontend run (in ./client directory)
```sh
jest
```