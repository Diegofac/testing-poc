const test = require('ava');
const sinon = require('sinon');
const { getTasks } = require('../../server/service');
const tasks = require('../../server/tasks');

test('Get Tasks', async t => {

    sinon.stub(tasks, "find").callsFake(() => {
        return { name: "resize" };
    });
    
    var task = await getTasks();
    t.is(task.name, 'resize');

});
