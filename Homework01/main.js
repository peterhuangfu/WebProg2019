const list_input = document.getElementById('todo-input');
const root = document.getElementById('root');
const list_li = document.getElementById('todo-list');
const todo_cnt = document.getElementById('todo-count');
const footer = document.getElementById('todo-footer');
const clean = document.getElementById('todo-clean');
footer.style.display = 'none';
nodes = [];
list_id = 0;
state = 0;

function addToList(event) {
    if(event.key === 'Enter' && event.target.value.trim() !== '') {
        let newli = addList(event.target.value.trim());
        let newitem = { node: newli, isComplete: false };
        event.target.value = '';
        nodes.push(newitem);
        list_li.appendChild(newitem.node, list_li.firstChild);
        if(nodes.length === 1) {
            footer.style.display = 'flex';
            // document.getElementById('all_button').focus();
        }
        todo_cnt.innerHTML = nodes.filter(comple => !comple.isComplete).length + ' left';

        if(state === 1) {
            filterActive();
        }
        else if(state === 2) {
            filterComplete();
        }
    }
}

function addList(content) {
    const todo_list = document.createElement('LI');
    const checkbox_div = document.createElement('DIV');
    const checkbox = document.createElement('INPUT');
    const checkbox_label = document.createElement('LABEL');
    const list_content = document.createElement('H1');
    const list_x = document.createElement('IMG');

    todo_list.setAttribute('class', 'todo-app__item');
    todo_list.setAttribute('id', 'cnt' + list_id);
    checkbox_div.setAttribute('class', 'todo-app__checkbox');

    checkbox.setAttribute('id', list_id);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('onclick', 'check(event)');
    checkbox_label.setAttribute('for', list_id);

    list_content.setAttribute('class', 'todo-app__item-detail');
    list_content.innerHTML = content;

    list_x.setAttribute('class', 'todo-app__item-x');
    list_x.setAttribute('src', './img/x.png');
    list_x.setAttribute('onclick', 'del(event)');
    list_x.setAttribute('id', list_id);

    ////////////////////////////////////////////////////////////////
    
    checkbox_div.appendChild(checkbox);
    checkbox_div.appendChild(checkbox_label);
    todo_list.appendChild(checkbox_div);
    todo_list.appendChild(list_content);
    todo_list.appendChild(list_x);
    list_id += 1;

    return todo_list;
}

function check(event) {
    let id = event.target.id;
    let item = nodes[0];

    for(i = 0; i < nodes.length; i++) {
        if(id == nodes[i].node.id.replace('cnt','')) {
            // let content = nodes[i].node.textContent;
            nodes[i].isComplete = !nodes[i].isComplete;
            item = nodes[i];
            break;
        }
    }

    if(item.isComplete === true) {
        let del_tag = document.createElement('DEL');
        let layer_one = document.getElementById(item.node.id);
        let layer_two = layer_one.getElementsByTagName('h1')[0];
        del_tag.innerHTML = layer_two.innerHTML;
        layer_two.innerHTML = '';
        layer_two.appendChild(del_tag);
        layer_two.style.opacity = '0.5';
    }
    else {
        let layer_one = document.getElementById(item.node.id);
        let layer_two = layer_one.getElementsByTagName('h1')[0];
        let layer_three = layer_two.getElementsByTagName('del')[0];
        layer_two.innerHTML = layer_three.innerHTML;
        layer_two.style.opacity = '1';
    }

    if(nodes.filter(comple => comple.isComplete).length) {
        clean.style.visibility = 'visible';
    }
    else {
        clean.style.visibility = 'hidden';
    }

    todo_cnt.innerHTML = nodes.filter(comple => !comple.isComplete).length + ' left';
    if(state === 1) {
        filterActive();
    }
    else if(state === 2) {
        filterComplete();
    }
}

function del(event) {
    let id = event.target.id;
    let each_li = list_li.getElementsByTagName('li');
    for(i = 0; i < nodes.length; i++) {
        if(id == nodes[i].node.id.replace('cnt','')) {
            nodes.splice(i, 1);
            list_li.removeChild(each_li[i]);
            break;
        }
    }
    todo_cnt.innerHTML = nodes.filter(comple => !comple.isComplete).length + ' left';
    if(nodes.filter(comple => !comple.isComplete).length === 0) {
        footer.style.display = 'none';
    }
}

function clean_complete() {
    let each_li = list_li.getElementsByTagName('li');
    for(i = each_li.length-1; i >= 0; i--) {
        for(k = 0; k < nodes.length; k++) {
            if(each_li[i] === nodes[k].node) {
                if(nodes[k].isComplete === true) {
                    list_li.removeChild(each_li[i]);
                    break;
                }
            }
        }
    }
    nodes = nodes.filter(one => !one.isComplete);
    clean.style.visibility = 'hidden';
    if(nodes.filter(comple => !comple.isComplete).length === 0) {
        footer.style.display = 'none';
    }
}

function filterAll() {
    state = 0;
    let each_li = list_li.getElementsByTagName('li');
    for(i = 0; i < each_li.length; i++) {
        each_li[i].style.display = 'flex';
    }
}

function filterActive() {
    state = 1;
    let each_li = list_li.getElementsByTagName('li');
    for(i = 0; i < each_li.length; i++) {
        for(k = 0; k < nodes.length; k++) {
            if(each_li[i] === nodes[k].node) {
                if(nodes[k].isComplete === true) {
                    each_li[i].style.display = 'none';
                    break;
                }
                else {
                    each_li[i].style.display = 'flex';
                    break;
                }
            }
        }
    }
}

function filterComplete() {
    state = 2;
    let each_li = list_li.getElementsByTagName('li');
    for(i = 0; i < each_li.length; i++) {
        for(k = 0; k < nodes.length; k++) {
            if(each_li[i] === nodes[k].node) {
                if(nodes[k].isComplete === false) {
                    each_li[i].style.display = 'none';
                    break;
                }
                else {
                    each_li[i].style.display = 'flex';
                    break;
                }
            }
        }
    }
}
