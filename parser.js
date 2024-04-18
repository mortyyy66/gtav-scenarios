const parser = require('xml2json');
const fs = require('node:fs');

function LoadMETA() {
  const data = fs.readFileSync('./scenarios.meta', { encoding: 'utf8' });
  return data
}
const METAData = LoadMETA();

const obj = parser.toJson(METAData, { object: true });

const scenarios = obj.CScenarioInfoManager.Scenarios

Object.values(scenarios).forEach((currentScenario) => {
  const scenarioList = currentScenario
  scenarioList.map((scenario) => {
    console.log(`-${scenario.Name}- | *Human*`)
  })
})
