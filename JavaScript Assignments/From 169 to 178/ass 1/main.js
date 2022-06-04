let fromServer = '[{"id": 1,"author":"Ahmed","head": "hi","article":"wellcome"},{"id": 2,"author":"Ahmed","head": "hi","article":"wellcome"},{"id": 3,"author":"Ahmed","head": "hi","article":"wellcome"},{"id": 4,"author":"Ahmed","head": "hi","article":"wellcome"},{"id": 5,"author":"Ahmed","head": "hi","article":"wellcome"}]';

let javaObject = JSON.parse(fromServer);

javaObject[0].id = 20;

let toServer = JSON.stringify(javaObject);

console.log(toServer);