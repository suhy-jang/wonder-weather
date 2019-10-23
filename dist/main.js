/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/display/create_display.js":
/*!***************************************!*\
  !*** ./src/display/create_display.js ***!
  \***************************************/
/*! exports provided: createLayout, createProject, createTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLayout", function() { return createLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return createProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodo", function() { return createTodo; });
/* harmony import */ var _create_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_form */ "./src/display/create_form.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/display/utils.js");



var commonUsage = function () {
  var setting = function setting() {
    var tag = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'div',
      classes: 'setting'
    });
    tag.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'i',
      classes: 'edit fas fa-edit cursor-pointer'
    }));
    tag.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'i',
      classes: 'delete far fa-times-circle cursor-pointer'
    }));
    return tag;
  };

  var headerSet = function headerSet(header, word) {
    header.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'h1',
      classes: 'h-title',
      text: word
    }));
    header.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'h1',
      classes: 'create-form cursor-pointer',
      text: '+'
    }));
  };

  var setGroup = function setGroup(sort, container) {
    var group = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'div',
      classes: "".concat(sort, "-content-group")
    });
    headerSet(container, _utils__WEBPACK_IMPORTED_MODULE_1__["default"].capitalize(sort));
    container.appendChild(group);
    return container;
  };

  return {
    setting: setting,
    setGroup: setGroup
  };
}();

var createLayout = function () {
  var render = function render() {
    var mainContainer = document.querySelector('#content');
    var projectContainer = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'section',
      id: 'project',
      classes: 'col-md-4 primary-bg'
    });
    var todoContainer = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'section',
      id: 'todo',
      classes: 'col-md-8 secondary-bg'
    });
    mainContainer.classList.add('secondary-bg');
    mainContainer.appendChild(commonUsage.setGroup('project', projectContainer));
    mainContainer.appendChild(commonUsage.setGroup('todo', todoContainer));
    projectContainer.appendChild(_create_form__WEBPACK_IMPORTED_MODULE_0__["default"].mainForm({
      option: 'project'
    }));
    projectContainer.appendChild(commonUsage.setting());
    todoContainer.appendChild(_create_form__WEBPACK_IMPORTED_MODULE_0__["default"].mainForm({
      option: 'todo'
    }));
    return mainContainer;
  };

  return {
    render: render
  };
}();

var createProject = function () {
  var projectUnitDisplay = function projectUnitDisplay(_ref) {
    var projectName = _ref.projectName,
        id = _ref.id;
    var project = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'h4',
      id: id,
      classes: 'project-content m-0 cursor-pointer'
    });
    project.textContent = projectName;
    var projectGroup = document.querySelector('.project-content-group');
    projectGroup.appendChild(project);
  };

  var addGroup = function addGroup(projectArray) {
    projectArray.forEach(function (e) {
      return projectUnitDisplay(e);
    });
  };

  return {
    addGroup: addGroup
  };
}();

var createTodo = function () {
  var doneStatusDisplay = function doneStatusDisplay(_ref2) {
    var done = _ref2.done,
        parent = _ref2.parent;
    var target = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'input',
      classes: 'done-btn vertical-align-bottom cursor-pointer'
    });
    target.type = 'checkbox';

    if (done) {
      target.checked = true;
      parent.classList.add('done');
    }

    return target;
  };

  var todoUnitDisplay = function todoUnitDisplay(_ref3) {
    var title = _ref3.title,
        date = _ref3.date,
        priority = _ref3.priority,
        description = _ref3.description,
        id = _ref3.id,
        done = _ref3.done;
    var todo = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'div',
      id: id,
      classes: "todo-content no-gutter ".concat(priority)
    });
    todo.appendChild(doneStatusDisplay({
      done: done,
      parent: todo
    }));
    todo.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'h4',
      classes: 'title text-nowrap m-0',
      text: title
    }));
    todo.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'div',
      classes: 'date',
      text: date
    }));
    todo.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'div',
      classes: 'description text-nowrap',
      text: description
    }));
    todo.appendChild(commonUsage.setting());
    return todo;
  };

  var addGroup = function addGroup(newGroup) {
    var todoGroup = document.querySelector('.todo-content-group');

    while (todoGroup.firstChild) {
      todoGroup.removeChild(todoGroup.firstChild);
    }

    newGroup.forEach(function (e) {
      return todoGroup.appendChild(todoUnitDisplay(e));
    });
  };

  return {
    addGroup: addGroup
  };
}();



/***/ }),

/***/ "./src/display/create_form.js":
/*!************************************!*\
  !*** ./src/display/create_form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/display/utils.js");


var createForm = function () {
  var buildField = function buildField(_ref) {
    var placeholder = _ref.placeholder,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        textarea = _ref.textarea;
    var inputType = textarea || 'input';
    var name = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].includeSpace(placeholder) ? _utils__WEBPACK_IMPORTED_MODULE_0__["default"].exchangeSpaceToDash(placeholder) : placeholder;
    var field = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      classes: "field ".concat(name)
    });
    var input = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: inputType,
      id: name,
      classes: name
    });
    input.setAttribute('placeholder', placeholder);
    input.name = name;
    if (type) input.type = type;
    if (defaultValue) input.defaultValue = defaultValue;
    field.appendChild(input);
    return field;
  };

  var priorityUnit = function priorityUnit(word, field, checked) {
    var input = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'input',
      id: "priority-".concat(word),
      classes: 'priority'
    });
    input.name = 'priority';
    input.type = 'radio';
    if (checked) input.checked = true;
    var label = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'label',
      text: word
    });
    label.setAttribute('for', "priority-".concat(word));
    field.appendChild(input);
    field.appendChild(label);
  };

  var priorityField = function priorityField(priority) {
    var field = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      classes: 'field priority'
    });
    var checked = [true, false];

    if (priority && priority === 'priority-urgent') {
      checked = [false, true];
    }

    priorityUnit('normal', field, checked[0]);
    priorityUnit('urgent', field, checked[1]);
    return field;
  };

  var mainForm = function mainForm(_ref2) {
    var option = _ref2.option,
        data = _ref2.data;
    var form = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'form',
      classes: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].exchangeSpaceToDash("".concat(option, " form"))
    });
    form.classList.add('d-none');
    var fieldset = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'fieldset'
    });
    form.appendChild(fieldset);

    if (option === 'project') {
      if (data) fieldset.appendChild(buildField({
        placeholder: 'project name',
        defaultValue: data.projectName
      }));else fieldset.appendChild(buildField({
        placeholder: 'project name'
      }));
    } else {
      fieldset.appendChild(buildField({
        placeholder: 'title',
        defaultValue: data ? data.title : ''
      }));
      fieldset.appendChild(buildField({
        placeholder: 'date',
        type: 'date',
        defaultValue: data ? data.date : _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDateFromToday(0)
      }));
      fieldset.appendChild(priorityField(data ? data.priority : ''));
      fieldset.appendChild(buildField({
        placeholder: 'description',
        textarea: 'textarea',
        defaultValue: data ? data.description : ''
      }));
    }

    return form;
  };

  return {
    mainForm: mainForm
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (createForm);

/***/ }),

/***/ "./src/display/delete_display.js":
/*!***************************************!*\
  !*** ./src/display/delete_display.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var deleteDisplay = function () {
  var deleteUnit = function deleteUnit(_ref) {
    var id = _ref.id,
        button = _ref.button;
    var object = button ? button.parentNode.parentNode : document.getElementById(id);
    object.parentNode.removeChild(object);
    return object.id;
  };

  return {
    deleteUnit: deleteUnit
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (deleteDisplay);

/***/ }),

/***/ "./src/display/read_display.js":
/*!*************************************!*\
  !*** ./src/display/read_display.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/display/utils.js");


var readDisplay = function () {
  var getEditButtonAll = function getEditButtonAll(id) {
    var container = document.getElementById(id);
    return container.querySelectorAll('.edit');
  };

  var collectFormHiddenData = function collectFormHiddenData(_ref) {
    var data = _ref.data,
        form = _ref.form;
    var parent = form.parentNode;
    if (parent.id.split('-').length !== 2) return undefined;
    var classes = parent.classList.value.split(' ');
    data.done = classes.includes('done');
    data.id = parent.id;
    return data;
  };

  var getDoneButtonAll = function getDoneButtonAll(id) {
    var container = document.getElementById(id);
    return container.querySelectorAll('.done-btn');
  };

  var getProjectList = function getProjectList() {
    return document.querySelector('.project-content-group').childNodes;
  };

  var getProjectsExceptCurrent = function getProjectsExceptCurrent() {
    var collection = [];
    var allList = getProjectList();
    var len = allList.length;

    for (var i = 0; i < len; i++) {
      var classes = allList[i].classList.value.split(' ');

      if (!classes.includes('current-project')) {
        collection.push(allList[i]);
      }
    }

    return collection;
  };

  var getFormLayout = function getFormLayout(id) {
    var selector = document.getElementById(id);
    var open = selector.querySelector('.create-form');
    var form = selector.querySelector('form');
    return {
      form: form,
      open: open
    };
  };

  var getRadioInfo = function getRadioInfo(input, data) {
    var radios = input.parentNode.querySelectorAll('input');
    radios.forEach(function (radio) {
      if (radio.checked) {
        data[radio.name] = radio.id;
      }
    });
  };

  var getFormData = function getFormData(form) {
    var data = {};
    form.querySelectorAll('.field').forEach(function (field) {
      var selector = field.querySelector('input') || field.querySelector('textarea');

      if (selector.type === 'radio') {
        getRadioInfo(selector, data);
      } else {
        var key = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].exchangeDashToCapital(selector.name);
        var value = selector.value;
        data[key] = value;
      }
    });
    return data;
  };

  var currentOrLastProject = function currentOrLastProject(projectId) {
    if (projectId) {
      return document.querySelector("#".concat(projectId));
    }

    if (document.querySelector('.project-content-group').childNodes.length > 0) {
      return document.querySelector('.project-content-group').lastChild;
    }

    return undefined;
  };

  var getDeleteButtonAll = function getDeleteButtonAll(id) {
    var container = document.getElementById(id);
    return container.querySelectorAll('.delete');
  };

  var getResetButton = function getResetButton() {
    var parent = document.getElementById('todo');
    return parent.querySelector('.h-title');
  };

  return {
    getEditButtonAll: getEditButtonAll,
    collectFormHiddenData: collectFormHiddenData,
    getDoneButtonAll: getDoneButtonAll,
    getProjectList: getProjectList,
    getProjectsExceptCurrent: getProjectsExceptCurrent,
    getFormLayout: getFormLayout,
    getFormData: getFormData,
    currentOrLastProject: currentOrLastProject,
    getDeleteButtonAll: getDeleteButtonAll,
    getResetButton: getResetButton
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (readDisplay);

/***/ }),

/***/ "./src/display/update_display.js":
/*!***************************************!*\
  !*** ./src/display/update_display.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_form */ "./src/display/create_form.js");
/* harmony import */ var _read_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read_display */ "./src/display/read_display.js");



var updateDisplay = function () {
  var toggleNewForm = function toggleNewForm(form) {
    form.classList.toggle('d-none');
  };

  var toggleCursorPointer = function toggleCursorPointer(button) {
    button.classList.toggle('cursor-pointer');
  };

  var otherButtonOff = function otherButtonOff(button) {
    var all = document.querySelectorAll('.cursor-pointer');
    all.forEach(function (e) {
      if (e !== button) e.classList.toggle('pointer-events-none');
    });
  };

  var shiftFormData = function shiftFormData(_ref) {
    var sort = _ref.sort,
        object = _ref.object;
    var data = {};
    var classList = object.classList.value.split(' ');

    if (sort === 'project') {
      data.projectName = object.innerText;
      object.innerText = '';
    }

    if (sort === 'todo') {
      for (var i = 0; i < object.childNodes.length - 1; i++) {
        var target = object.childNodes[i];
        var indicator = target.classList[0];
        var text = target.innerText;
        data[indicator] = text;
        target.innerText = '';
      }

      object.firstChild.style.display = 'none';
    }

    if (sort === 'todo') data.priority = classList.includes('priority-urgent') ? 'priority-urgent' : 'priority-normal';
    return {
      data: data
    };
  };

  var openFormToEdit = function openFormToEdit(_ref2) {
    var id = _ref2.id,
        button = _ref2.button;
    var object = button ? button.parentNode.parentNode : document.getElementById(id);
    var sort = object.id.split('-')[0];
    var openedForm = object.querySelector('form');

    if (openedForm) {
      return {
        status: 'opened',
        form: openedForm
      };
    }

    var _shiftFormData = shiftFormData({
      sort: sort,
      object: object
    }),
        data = _shiftFormData.data;

    var form = _create_form__WEBPACK_IMPORTED_MODULE_0__["default"].mainForm({
      option: sort,
      data: data
    });
    object.appendChild(form);
    toggleNewForm(form);
    return {
      status: 'normal',
      form: form
    };
  };

  var toggleDone = function toggleDone(button) {
    var object = button.parentNode;
    object.classList.toggle('done');
    return object.id;
  };

  var updateCurrentProject = function updateCurrentProject(newTag) {
    var projectGroup = document.querySelector('.project-content-group');
    var previous = projectGroup.querySelector('.current-project');
    if (previous) previous.classList.remove('current-project');
    newTag.classList.add('current-project');
    return newTag.id;
  };

  var makeBlankForm = function makeBlankForm(form) {
    form.querySelectorAll('.field').forEach(function (field) {
      var selector = field.querySelector('input') || field.querySelector('textarea');
      selector.value = '';
    });
  };

  return {
    toggleDone: toggleDone,
    toggleCursorPointer: toggleCursorPointer,
    toggleNewForm: toggleNewForm,
    openFormToEdit: openFormToEdit,
    updateCurrentProject: updateCurrentProject,
    makeBlankForm: makeBlankForm,
    otherButtonOff: otherButtonOff
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (updateDisplay);

/***/ }),

/***/ "./src/display/utils.js":
/*!******************************!*\
  !*** ./src/display/utils.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var utils = function () {
  var createTag = function createTag(_ref) {
    var tag = _ref.tag,
        id = _ref.id,
        classes = _ref.classes,
        text = _ref.text;
    var obj = document.createElement(tag);
    if (id) obj.setAttribute('id', id);
    if (classes) classes.split(' ').forEach(function (elem) {
      return obj.classList.add(elem);
    });
    if (text) obj.textContent = text;
    return obj;
  };

  var getDateFromToday = function getDateFromToday(addDate) {
    var date = new Date();
    date.setDate(date.getDate() + addDate);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!

    var yyyy = date.getFullYear();
    date = "".concat(yyyy, "-").concat(mm, "-").concat(dd);
    return date;
  };

  var resizeTextarea = function resizeTextarea() {
    var textarea = document.querySelector('textarea');
    textarea.addEventListener('keyup', function () {
      textarea.style.height = 'auto';
      textarea.style.height = "".concat(20 + textarea.scrollHeight, "px");
    });
  };

  var focusSet = function focusSet(target) {
    if (target) target.querySelector('input').focus();
  };

  var reloadScreen = function reloadScreen() {
    return window.location.reload();
  };

  var eliminateFirstOfDash = function eliminateFirstOfDash(words) {
    return words.split('-')[1];
  };

  var capitalize = function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  var exchangeDashToCapital = function exchangeDashToCapital(word) {
    var words = word.split('-');

    if (words.length > 1) {
      words[1] = capitalize(words[1]);
    }

    return words.join('');
  };

  var exchangeSpaceToDash = function exchangeSpaceToDash(word) {
    return word.split(' ').join('-');
  };

  var includeSpace = function includeSpace(word) {
    return word.split(' ').length > 1;
  };

  var dynamicSetting = function dynamicSetting() {
    resizeTextarea();
    focusSet();
  };

  return {
    createTag: createTag,
    getDateFromToday: getDateFromToday,
    eliminateFirstOfDash: eliminateFirstOfDash,
    exchangeDashToCapital: exchangeDashToCapital,
    exchangeSpaceToDash: exchangeSpaceToDash,
    includeSpace: includeSpace,
    resizeTextarea: resizeTextarea,
    focusSet: focusSet,
    reloadScreen: reloadScreen,
    dynamicSetting: dynamicSetting,
    capitalize: capitalize
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ }),

/***/ "./src/display_interface.js":
/*!**********************************!*\
  !*** ./src/display_interface.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_create_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/create_display */ "./src/display/create_display.js");
/* harmony import */ var _display_read_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/read_display */ "./src/display/read_display.js");
/* harmony import */ var _display_update_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/update_display */ "./src/display/update_display.js");
/* harmony import */ var _display_delete_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/delete_display */ "./src/display/delete_display.js");
/* harmony import */ var _display_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display/utils */ "./src/display/utils.js");






var displayInterface = function () {
  var addProjectGroup = function addProjectGroup(projectArray) {
    return _display_create_display__WEBPACK_IMPORTED_MODULE_0__["createProject"].addGroup(projectArray);
  };

  var addTodoGroup = function addTodoGroup(todoArray) {
    return _display_create_display__WEBPACK_IMPORTED_MODULE_0__["createTodo"].addGroup(todoArray);
  };

  var render = function render() {
    return _display_create_display__WEBPACK_IMPORTED_MODULE_0__["createLayout"].render();
  };

  var getFormLayout = function getFormLayout(id) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getFormLayout(id);
  };

  var getFormData = function getFormData(form, projectId) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getFormData(form, projectId);
  };

  var makeBlankForm = function makeBlankForm(form) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].makeBlankForm(form);
  };

  var otherButtonOff = function otherButtonOff(button) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].otherButtonOff(button);
  };

  var getDeleteButtonAll = function getDeleteButtonAll(id) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getDeleteButtonAll(id);
  };

  var deleteUnit = function deleteUnit(obj) {
    return _display_delete_display__WEBPACK_IMPORTED_MODULE_3__["default"].deleteUnit(obj);
  };

  var getResetButton = function getResetButton() {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getResetButton();
  };

  var getProjectList = function getProjectList() {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectList();
  };

  var updateCurrentProject = function updateCurrentProject(newTag) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].updateCurrentProject(newTag);
  };

  var currentOrLastProject = function currentOrLastProject(projectId) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].currentOrLastProject(projectId);
  };

  var toggleNewForm = function toggleNewForm(form) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].toggleNewForm(form);
  };

  var toggleCursorPointer = function toggleCursorPointer(button) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].toggleCursorPointer(button);
  };

  var getDoneButtonAll = function getDoneButtonAll(id) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getDoneButtonAll(id);
  };

  var toggleDone = function toggleDone(button) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].toggleDone(button);
  };

  var getEditButtonAll = function getEditButtonAll(id) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getEditButtonAll(id);
  };

  var openFormToEdit = function openFormToEdit(obj) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].openFormToEdit(obj);
  };

  var collectFormHiddenData = function collectFormHiddenData(obj) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].collectFormHiddenData(obj);
  };

  var getProjectsExceptCurrent = function getProjectsExceptCurrent() {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectsExceptCurrent();
  };

  var focusSet = function focusSet(target) {
    return _display_utils__WEBPACK_IMPORTED_MODULE_4__["default"].focusSet(target);
  };

  var reloadScreen = function reloadScreen() {
    return _display_utils__WEBPACK_IMPORTED_MODULE_4__["default"].reloadScreen();
  };

  var dynamicSetting = function dynamicSetting() {
    return _display_utils__WEBPACK_IMPORTED_MODULE_4__["default"].dynamicSetting();
  };

  return {
    render: render,
    addTodoGroup: addTodoGroup,
    addProjectGroup: addProjectGroup,
    getFormLayout: getFormLayout,
    getFormData: getFormData,
    makeBlankForm: makeBlankForm,
    otherButtonOff: otherButtonOff,
    getDeleteButtonAll: getDeleteButtonAll,
    deleteUnit: deleteUnit,
    getResetButton: getResetButton,
    getProjectList: getProjectList,
    updateCurrentProject: updateCurrentProject,
    currentOrLastProject: currentOrLastProject,
    getDoneButtonAll: getDoneButtonAll,
    toggleDone: toggleDone,
    toggleNewForm: toggleNewForm,
    toggleCursorPointer: toggleCursorPointer,
    getEditButtonAll: getEditButtonAll,
    openFormToEdit: openFormToEdit,
    collectFormHiddenData: collectFormHiddenData,
    focusSet: focusSet,
    reloadScreen: reloadScreen,
    getProjectsExceptCurrent: getProjectsExceptCurrent,
    dynamicSetting: dynamicSetting
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (displayInterface);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display_interface */ "./src/display_interface.js");
/* harmony import */ var _logic_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic_interface */ "./src/logic_interface.js");



var interfaceMain = function () {
  var projectSetting = function projectSetting() {
    var projectArray = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList();
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].addProjectGroup(projectArray);
  };

  var todoSetting = function todoSetting() {
    var todoArray = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoListForProject();
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].addTodoGroup(todoArray);
  };

  var updateCurrentProject = function updateCurrentProject(button) {
    var projectId = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].updateCurrentProject(button);
    _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].updateTodoListForProject(projectId);
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].toggleCursorPointer(button);
    todoSetting();
  };

  var afterSubmission = function afterSubmission(form) {
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].makeBlankForm(form);
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].reloadScreen();
  };

  var submitForm = function submitForm(sort, form) {
    var data = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getFormData(form);

    if (_display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].collectFormHiddenData({
      data: data,
      form: form
    })) {
      _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].fillInData({
        data: data
      });
      _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].updateUnit({
        id: data.id,
        data: data
      });
    } else {
      if (sort === 'project') {
        _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectList(data);
      }

      if (sort === 'todo') {
        data.projectId = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
        _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].addTodoList(data);
      }
    }

    afterSubmission(form);
  };

  var setInitialCurrentProject = function setInitialCurrentProject() {
    var projectId = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
    var projectObj = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].currentOrLastProject(projectId);
    if (projectObj) updateCurrentProject(projectObj);
  };

  var formSubmissionEvent = function formSubmissionEvent(form, sort) {
    form.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        submitForm(sort, form);
      }
    });
  };

  var projectSwitchEvent = function projectSwitchEvent() {
    var buttons = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsExceptCurrent();

    if (buttons.length > 0) {
      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          updateCurrentProject(button);
          _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].reloadScreen();
        });
      });
    }
  };

  var deleteProjectUnit = function deleteProjectUnit() {
    var id = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].deleteUnit({
      id: id
    });
    _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].deleteUnit(id);
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].reloadScreen();
  };

  var deleteTodoUnit = function deleteTodoUnit(button) {
    var id = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].deleteUnit({
      button: button
    });
    _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].deleteUnit(id);
  };

  var deleteEvent = function deleteEvent(word) {
    var deleteAllButton = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getDeleteButtonAll(word);
    deleteAllButton.forEach(function (deleteBtn) {
      deleteBtn.addEventListener('click', function () {
        if (word === 'project') deleteProjectUnit();
        if (word === 'todo') deleteTodoUnit(deleteBtn);
      });
    });
  };

  var doneUnit = function doneUnit(button) {
    var id = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].toggleDone(button);
    _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].doneUnit(id);
  };

  var doneEvent = function doneEvent(word) {
    var doneAllBtn = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getDoneButtonAll(word);
    doneAllBtn.forEach(function (doneBtn) {
      doneBtn.addEventListener('click', function () {
        doneUnit(doneBtn);
      });
    });
  };

  var editProject = function editProject() {
    var id = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
    return _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].openFormToEdit({
      id: id
    });
  };

  var editTodo = function editTodo(button) {
    return _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].openFormToEdit({
      button: button
    });
  };

  var editUnit = function editUnit(sort, button) {
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].otherButtonOff(button);

    var _ref = sort === 'project' ? editProject() : editTodo(button),
        status = _ref.status,
        form = _ref.form;

    if (status === 'opened') {
      submitForm(sort, form);
    } else {
      formSubmissionEvent(form, sort);
      _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].focusSet(form);
    }
  };

  var editEvent = function editEvent(sort) {
    var editAllBtn = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getEditButtonAll(sort);
    editAllBtn.forEach(function (btn) {
      btn.addEventListener('click', function () {
        editUnit(sort, btn);
      });
    });
  };

  var programResetEvent = function programResetEvent() {
    var resetBtn = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getResetButton();
    var num = 0;
    resetBtn.addEventListener('click', function () {
      num += 1;
      if (num < 7) return; // reset should be hidden from user

      _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].resetStorage();
      _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].reloadScreen();
    });
  };

  var openFormEvent = function openFormEvent(open, form) {
    open.addEventListener('click', function () {
      _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].otherButtonOff(open);
      _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].toggleNewForm(form);
      _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].focusSet(form);
    });
  };

  var createEvents = function createEvents(word) {
    var _displayInterface$get = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getFormLayout(word),
        open = _displayInterface$get.open,
        form = _displayInterface$get.form;

    openFormEvent(open, form);
    formSubmissionEvent(form, word);
    editEvent(word);
    deleteEvent(word);

    if (word === 'todo') {
      doneEvent(word);
    }

    if (word === 'project') {
      projectSwitchEvent();
      programResetEvent();
    }
  };

  var init = function init() {
    _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].setInit();
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].render();
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].dynamicSetting();
    projectSetting();
    setInitialCurrentProject();
  };

  var start = function start() {
    init();
    ['project', 'todo'].forEach(function (word) {
      return createEvents(word);
    });
  };

  return {
    start: start
  };
}();

interfaceMain.start();

/***/ }),

/***/ "./src/logic_interface.js":
/*!********************************!*\
  !*** ./src/logic_interface.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logics_create_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logics/create_logic */ "./src/logics/create_logic.js");
/* harmony import */ var _logics_read_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logics/read_logic */ "./src/logics/read_logic.js");
/* harmony import */ var _logics_delete_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logics/delete_logic */ "./src/logics/delete_logic.js");
/* harmony import */ var _logics_update_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logics/update_logic */ "./src/logics/update_logic.js");
/* harmony import */ var _logics_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logics/storage */ "./src/logics/storage.js");






var logicInterface = function () {
  var addProjectList = function addProjectList(data) {
    return _logics_create_logic__WEBPACK_IMPORTED_MODULE_0__["createProject"].addProjectList(data);
  };

  var addTodoList = function addTodoList(data) {
    return _logics_create_logic__WEBPACK_IMPORTED_MODULE_0__["createTodo"].addTodoList(data);
  };

  var updateTodoListForProject = function updateTodoListForProject(id) {
    return _logics_create_logic__WEBPACK_IMPORTED_MODULE_0__["createTodo"].setTodoListForProject(id);
  };

  var getCurrentProject = function getCurrentProject() {
    return _logics_read_logic__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
  };

  var getProjectList = function getProjectList() {
    return _logics_read_logic__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList();
  };

  var getTodoListForProject = function getTodoListForProject() {
    return _logics_read_logic__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoListForProject();
  };

  var deleteUnit = function deleteUnit(id) {
    return _logics_delete_logic__WEBPACK_IMPORTED_MODULE_2__["default"].deleteUnit(id);
  };

  var resetStorage = function resetStorage() {
    return _logics_storage__WEBPACK_IMPORTED_MODULE_4__["default"].resetStorage();
  };

  var fillInData = function fillInData(data) {
    return _logics_update_logic__WEBPACK_IMPORTED_MODULE_3__["default"].fillInData(data);
  };

  var doneUnit = function doneUnit(id) {
    return _logics_update_logic__WEBPACK_IMPORTED_MODULE_3__["default"].doneUnit(id);
  };

  var updateUnit = function updateUnit(obj) {
    return _logics_update_logic__WEBPACK_IMPORTED_MODULE_3__["default"].updateUnit(obj);
  };

  var setInit = function setInit() {
    return _logics_create_logic__WEBPACK_IMPORTED_MODULE_0__["mainCreate"].setInit();
  };

  return {
    setInit: setInit,
    addProjectList: addProjectList,
    addTodoList: addTodoList,
    getCurrentProject: getCurrentProject,
    resetStorage: resetStorage,
    getProjectList: getProjectList,
    getTodoListForProject: getTodoListForProject,
    updateTodoListForProject: updateTodoListForProject,
    deleteUnit: deleteUnit,
    fillInData: fillInData,
    doneUnit: doneUnit,
    updateUnit: updateUnit
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (logicInterface);

/***/ }),

/***/ "./src/logics/create_logic.js":
/*!************************************!*\
  !*** ./src/logics/create_logic.js ***!
  \************************************/
/*! exports provided: createProject, createTodo, mainCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return createProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodo", function() { return createTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainCreate", function() { return mainCreate; });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/logics/storage.js");



var getNewId = function getNewId(sort) {
  var data = {};
  var id;

  if (_storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('ids') && _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('ids')["".concat(sort, "LastId")]) {
    id = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('ids')["".concat(sort, "LastId")];
    var newNumber = Number(id.split('-')[1]) + 1;
    id = "".concat(sort, "-").concat(newNumber);
  } else {
    id = "".concat(sort, "-1");
  }

  data["".concat(sort, "LastId")] = id;
  data["".concat(sort, "CurrentId")] = id;
  _storage__WEBPACK_IMPORTED_MODULE_1__["default"].appendJsonInfoToStorage({
    sort: 'ids',
    data: data
  });
  return id;
};

var createProject = function () {
  var setDefaultProject = function setDefaultProject() {
    var storageData = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('project');

    if (!storageData || storageData.length === 0) {
      var defaultProject = [{
        projectName: 'default project',
        id: 'project-1'
      }];
      _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setJsonInfoToStorage({
        sort: 'project',
        data: defaultProject
      });
      _storage__WEBPACK_IMPORTED_MODULE_1__["default"].appendJsonInfoToStorage({
        sort: 'ids',
        data: {
          projectLastId: defaultProject[0].id,
          projectCurrentId: defaultProject[0].id
        }
      });
    }
  };

  var addProjectList = function addProjectList(_ref) {
    var projectName = _ref.projectName,
        id = _ref.id;
    var copyProjectId = id || getNewId('project');
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].projectList.push(Object(_objects__WEBPACK_IMPORTED_MODULE_0__["project"])({
      projectName: projectName,
      id: copyProjectId
    }));
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setJsonInfoToStorage({
      sort: 'project',
      data: _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].projectList
    });
  };

  var setInfoFromStorage = function setInfoFromStorage() {
    var val = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('project');
    if (val) _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].projectList = val;
  };

  return {
    addProjectList: addProjectList,
    setInfoFromStorage: setInfoFromStorage,
    setDefaultProject: setDefaultProject
  };
}();

var createTodo = function () {
  var addTodoList = function addTodoList(data) {
    if (!data.id) data.id = getNewId('todo');
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList.push(Object(_objects__WEBPACK_IMPORTED_MODULE_0__["todo"])(data));
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setJsonInfoToStorage({
      sort: 'todo',
      data: _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList
    });
  };

  var setInfoFromStorage = function setInfoFromStorage() {
    var val = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('todo');
    if (val) _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList = val;
  };

  var setTodoListForProject = function setTodoListForProject(projectId) {
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoListForProject = _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList.filter(function (e) {
      return e.projectId === projectId;
    });
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].appendJsonInfoToStorage({
      sort: 'ids',
      data: {
        projectCurrentId: projectId
      }
    });
  };

  return {
    addTodoList: addTodoList,
    setTodoListForProject: setTodoListForProject,
    setInfoFromStorage: setInfoFromStorage
  };
}();

var mainCreate = function () {
  var setInit = function setInit() {
    createProject.setDefaultProject();
    createProject.setInfoFromStorage();
    createTodo.setInfoFromStorage();
  };

  return {
    setInit: setInit,
    getNewId: getNewId
  };
}();



/***/ }),

/***/ "./src/logics/delete_logic.js":
/*!************************************!*\
  !*** ./src/logics/delete_logic.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/logics/storage.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");



var deleteLogic = function () {
  var deleteTodoUnit = function deleteTodoUnit(idSort, id) {
    var data = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].getJsonInfoFromStorage('todo');
    var updated = data ? data.filter(function (e) {
      return e[idSort] !== id;
    }) : [];
    _objects__WEBPACK_IMPORTED_MODULE_1__["savings"].todoList = updated;
    _storage__WEBPACK_IMPORTED_MODULE_0__["default"].setJsonInfoToStorage({
      sort: 'todo',
      data: updated
    });
  };

  var deleteProjectUnit = function deleteProjectUnit(idSort, id) {
    var data = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].getJsonInfoFromStorage('project');
    var updated = data ? data.filter(function (e) {
      return e.id !== id;
    }) : [];
    _objects__WEBPACK_IMPORTED_MODULE_1__["savings"].projectList = updated;
    _storage__WEBPACK_IMPORTED_MODULE_0__["default"].setJsonInfoToStorage({
      sort: 'project',
      data: updated
    });
    deleteTodoUnit('projectId', id);
    _storage__WEBPACK_IMPORTED_MODULE_0__["default"].resetJsonInfoToStorage({
      sort: 'ids',
      data: {
        projectCurrentId: null
      }
    });
  };

  var deleteUnit = function deleteUnit(id) {
    var sort = id.split('-')[0];
    if (sort === 'todo') deleteTodoUnit('id', id);
    if (sort === 'project') deleteProjectUnit('id', id);
  };

  return {
    deleteUnit: deleteUnit
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (deleteLogic);

/***/ }),

/***/ "./src/logics/objects.js":
/*!*******************************!*\
  !*** ./src/logics/objects.js ***!
  \*******************************/
/*! exports provided: project, todo, savings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todo", function() { return todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savings", function() { return savings; });
var project = function project(_ref) {
  var projectName = _ref.projectName,
      id = _ref.id;
  return {
    projectName: projectName,
    id: id
  };
};

var todo = function todo(_ref2) {
  var title = _ref2.title,
      projectId = _ref2.projectId,
      date = _ref2.date,
      priority = _ref2.priority,
      description = _ref2.description,
      id = _ref2.id,
      _ref2$done = _ref2.done,
      done = _ref2$done === void 0 ? false : _ref2$done;
  return {
    title: title,
    projectId: projectId,
    date: date,
    priority: priority,
    description: description,
    id: id,
    done: done
  };
};

var savings = function () {
  var projectList = [];
  var todoList = [];
  var todoListForProject = [];
  return {
    projectList: projectList,
    todoList: todoList,
    todoListForProject: todoListForProject
  };
}();



/***/ }),

/***/ "./src/logics/read_logic.js":
/*!**********************************!*\
  !*** ./src/logics/read_logic.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/logics/storage.js");



var readLogic = function () {
  var getCurrentProject = function getCurrentProject() {
    var ids = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('ids');
    if (!ids) return undefined;
    return ids.projectCurrentId;
  };

  var getProjectList = function getProjectList() {
    return _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].projectList;
  };

  var getTodoListForProject = function getTodoListForProject() {
    return _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoListForProject;
  };

  return {
    getCurrentProject: getCurrentProject,
    getProjectList: getProjectList,
    getTodoListForProject: getTodoListForProject
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (readLogic);

/***/ }),

/***/ "./src/logics/storage.js":
/*!*******************************!*\
  !*** ./src/logics/storage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var storage = function () {
  var setJsonInfoToStorage = function setJsonInfoToStorage(_ref) {
    var sort = _ref.sort,
        data = _ref.data;
    window.localStorage.setItem(sort, JSON.stringify(data));
  };

  var appendJsonInfoToStorage = function appendJsonInfoToStorage(_ref2) {
    var sort = _ref2.sort,
        data = _ref2.data;
    var originalData = storage.getJsonInfoFromStorage(sort);
    var update = originalData || {};

    for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];

      update[k] = v;
    }

    window.localStorage.setItem(sort, JSON.stringify(update));
  };

  var getJsonInfoFromStorage = function getJsonInfoFromStorage(sort) {
    if (window.localStorage.getItem(sort)) {
      return JSON.parse(window.localStorage.getItem(sort));
    }

    return undefined;
  };

  var resetJsonInfoToStorage = function resetJsonInfoToStorage(_ref3) {
    var sort = _ref3.sort,
        data = _ref3.data;
    var originalData = getJsonInfoFromStorage(sort);
    var update = originalData || {};

    if (update) {
      Object.keys(data).forEach(function (key) {
        return delete update[key];
      });
    }

    window.localStorage.setItem(sort, JSON.stringify(update));
  };

  var resetStorage = function resetStorage() {
    window.localStorage.clear();
  };

  return {
    setJsonInfoToStorage: setJsonInfoToStorage,
    appendJsonInfoToStorage: appendJsonInfoToStorage,
    getJsonInfoFromStorage: getJsonInfoFromStorage,
    resetJsonInfoToStorage: resetJsonInfoToStorage,
    resetStorage: resetStorage
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (storage);

/***/ }),

/***/ "./src/logics/update_logic.js":
/*!************************************!*\
  !*** ./src/logics/update_logic.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/logics/storage.js");
/* harmony import */ var _read_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read_logic */ "./src/logics/read_logic.js");




var updateLogic = function () {
  var doneUnit = function doneUnit(id) {
    var sort = id.split('-')[0];
    var data = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage(sort);
    var obj = data.find(function (e) {
      return e.id === id;
    });
    if (obj) obj.done = !obj.done;
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"]["".concat(sort, "List")] = data;
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setJsonInfoToStorage({
      sort: sort,
      data: data
    });
  };

  var fillInData = function fillInData(_ref) {
    var data = _ref.data;
    if (!data.id) return;
    var idSet = data.id.split('-');
    var sort = idSet[0];

    if (sort === 'todo') {
      data.projectId = _read_logic__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject();
    }
  };

  var updateUnit = function updateUnit(_ref2) {
    var id = _ref2.id,
        data = _ref2.data;
    var sort = id.split('-')[0];
    var updatingData = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage(sort);
    var obj = updatingData.find(function (e) {
      return e.id === id;
    });
    updatingData.splice(updatingData.indexOf(obj), 1, data);
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"]["".concat(sort, "List")] = updatingData;
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setJsonInfoToStorage({
      sort: sort,
      data: updatingData
    });
  };

  return {
    doneUnit: doneUnit,
    updateUnit: updateUnit,
    fillInData: fillInData
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (updateLogic);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvY3JlYXRlX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvY3JlYXRlX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvZGVsZXRlX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvcmVhZF9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3VwZGF0ZV9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5X2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljX2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL2NyZWF0ZV9sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL2RlbGV0ZV9sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljcy9yZWFkX2xvZ2ljLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpY3Mvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL3VwZGF0ZV9sb2dpYy5qcyJdLCJuYW1lcyI6WyJjb21tb25Vc2FnZSIsInNldHRpbmciLCJ0YWciLCJ1dGlscyIsImNyZWF0ZVRhZyIsImNsYXNzZXMiLCJhcHBlbmRDaGlsZCIsImhlYWRlclNldCIsImhlYWRlciIsIndvcmQiLCJ0ZXh0Iiwic2V0R3JvdXAiLCJzb3J0IiwiY29udGFpbmVyIiwiZ3JvdXAiLCJjYXBpdGFsaXplIiwiY3JlYXRlTGF5b3V0IiwicmVuZGVyIiwibWFpbkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2plY3RDb250YWluZXIiLCJpZCIsInRvZG9Db250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjcmVhdGVGb3JtIiwibWFpbkZvcm0iLCJvcHRpb24iLCJjcmVhdGVQcm9qZWN0IiwicHJvamVjdFVuaXREaXNwbGF5IiwicHJvamVjdE5hbWUiLCJwcm9qZWN0IiwidGV4dENvbnRlbnQiLCJwcm9qZWN0R3JvdXAiLCJhZGRHcm91cCIsInByb2plY3RBcnJheSIsImZvckVhY2giLCJlIiwiY3JlYXRlVG9kbyIsImRvbmVTdGF0dXNEaXNwbGF5IiwiZG9uZSIsInBhcmVudCIsInRhcmdldCIsInR5cGUiLCJjaGVja2VkIiwidG9kb1VuaXREaXNwbGF5IiwidGl0bGUiLCJkYXRlIiwicHJpb3JpdHkiLCJkZXNjcmlwdGlvbiIsInRvZG8iLCJuZXdHcm91cCIsInRvZG9Hcm91cCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImJ1aWxkRmllbGQiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsInRleHRhcmVhIiwiaW5wdXRUeXBlIiwibmFtZSIsImluY2x1ZGVTcGFjZSIsImV4Y2hhbmdlU3BhY2VUb0Rhc2giLCJmaWVsZCIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwicHJpb3JpdHlVbml0IiwibGFiZWwiLCJwcmlvcml0eUZpZWxkIiwiZGF0YSIsImZvcm0iLCJmaWVsZHNldCIsImdldERhdGVGcm9tVG9kYXkiLCJkZWxldGVEaXNwbGF5IiwiZGVsZXRlVW5pdCIsImJ1dHRvbiIsIm9iamVjdCIsInBhcmVudE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsInJlYWREaXNwbGF5IiwiZ2V0RWRpdEJ1dHRvbkFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xsZWN0Rm9ybUhpZGRlbkRhdGEiLCJzcGxpdCIsImxlbmd0aCIsInVuZGVmaW5lZCIsInZhbHVlIiwiaW5jbHVkZXMiLCJnZXREb25lQnV0dG9uQWxsIiwiZ2V0UHJvamVjdExpc3QiLCJjaGlsZE5vZGVzIiwiZ2V0UHJvamVjdHNFeGNlcHRDdXJyZW50IiwiY29sbGVjdGlvbiIsImFsbExpc3QiLCJsZW4iLCJpIiwicHVzaCIsImdldEZvcm1MYXlvdXQiLCJzZWxlY3RvciIsIm9wZW4iLCJnZXRSYWRpb0luZm8iLCJyYWRpb3MiLCJyYWRpbyIsImdldEZvcm1EYXRhIiwia2V5IiwiZXhjaGFuZ2VEYXNoVG9DYXBpdGFsIiwiY3VycmVudE9yTGFzdFByb2plY3QiLCJwcm9qZWN0SWQiLCJsYXN0Q2hpbGQiLCJnZXREZWxldGVCdXR0b25BbGwiLCJnZXRSZXNldEJ1dHRvbiIsInVwZGF0ZURpc3BsYXkiLCJ0b2dnbGVOZXdGb3JtIiwidG9nZ2xlIiwidG9nZ2xlQ3Vyc29yUG9pbnRlciIsIm90aGVyQnV0dG9uT2ZmIiwiYWxsIiwic2hpZnRGb3JtRGF0YSIsImlubmVyVGV4dCIsImluZGljYXRvciIsInN0eWxlIiwiZGlzcGxheSIsIm9wZW5Gb3JtVG9FZGl0Iiwib3BlbmVkRm9ybSIsInN0YXR1cyIsInRvZ2dsZURvbmUiLCJ1cGRhdGVDdXJyZW50UHJvamVjdCIsIm5ld1RhZyIsInByZXZpb3VzIiwicmVtb3ZlIiwibWFrZUJsYW5rRm9ybSIsIm9iaiIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtIiwiYWRkRGF0ZSIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRkIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwicmVzaXplVGV4dGFyZWEiLCJhZGRFdmVudExpc3RlbmVyIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZm9jdXNTZXQiLCJmb2N1cyIsInJlbG9hZFNjcmVlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZWxpbWluYXRlRmlyc3RPZkRhc2giLCJ3b3JkcyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwiZHluYW1pY1NldHRpbmciLCJkaXNwbGF5SW50ZXJmYWNlIiwiYWRkUHJvamVjdEdyb3VwIiwiYWRkVG9kb0dyb3VwIiwidG9kb0FycmF5IiwiaW50ZXJmYWNlTWFpbiIsInByb2plY3RTZXR0aW5nIiwibG9naWNJbnRlcmZhY2UiLCJ0b2RvU2V0dGluZyIsImdldFRvZG9MaXN0Rm9yUHJvamVjdCIsInVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdCIsImFmdGVyU3VibWlzc2lvbiIsInN1Ym1pdEZvcm0iLCJmaWxsSW5EYXRhIiwidXBkYXRlVW5pdCIsImFkZFByb2plY3RMaXN0IiwiZ2V0Q3VycmVudFByb2plY3QiLCJhZGRUb2RvTGlzdCIsInNldEluaXRpYWxDdXJyZW50UHJvamVjdCIsInByb2plY3RPYmoiLCJmb3JtU3VibWlzc2lvbkV2ZW50Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwicHJvamVjdFN3aXRjaEV2ZW50IiwiYnV0dG9ucyIsImRlbGV0ZVByb2plY3RVbml0IiwiZGVsZXRlVG9kb1VuaXQiLCJkZWxldGVFdmVudCIsImRlbGV0ZUFsbEJ1dHRvbiIsImRlbGV0ZUJ0biIsImRvbmVVbml0IiwiZG9uZUV2ZW50IiwiZG9uZUFsbEJ0biIsImRvbmVCdG4iLCJlZGl0UHJvamVjdCIsImVkaXRUb2RvIiwiZWRpdFVuaXQiLCJlZGl0RXZlbnQiLCJlZGl0QWxsQnRuIiwiYnRuIiwicHJvZ3JhbVJlc2V0RXZlbnQiLCJyZXNldEJ0biIsIm51bSIsInJlc2V0U3RvcmFnZSIsIm9wZW5Gb3JtRXZlbnQiLCJjcmVhdGVFdmVudHMiLCJpbml0Iiwic2V0SW5pdCIsInN0YXJ0Iiwic2V0VG9kb0xpc3RGb3JQcm9qZWN0IiwicmVhZExvZ2ljIiwiZGVsZXRlTG9naWMiLCJzdG9yYWdlIiwidXBkYXRlTG9naWMiLCJtYWluQ3JlYXRlIiwiZ2V0TmV3SWQiLCJnZXRKc29uSW5mb0Zyb21TdG9yYWdlIiwibmV3TnVtYmVyIiwiTnVtYmVyIiwiYXBwZW5kSnNvbkluZm9Ub1N0b3JhZ2UiLCJzZXREZWZhdWx0UHJvamVjdCIsInN0b3JhZ2VEYXRhIiwiZGVmYXVsdFByb2plY3QiLCJzZXRKc29uSW5mb1RvU3RvcmFnZSIsInByb2plY3RMYXN0SWQiLCJwcm9qZWN0Q3VycmVudElkIiwiY29weVByb2plY3RJZCIsInNhdmluZ3MiLCJwcm9qZWN0TGlzdCIsInNldEluZm9Gcm9tU3RvcmFnZSIsInZhbCIsInRvZG9MaXN0IiwidG9kb0xpc3RGb3JQcm9qZWN0IiwiZmlsdGVyIiwiaWRTb3J0IiwidXBkYXRlZCIsInJlc2V0SnNvbkluZm9Ub1N0b3JhZ2UiLCJpZHMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9yaWdpbmFsRGF0YSIsInVwZGF0ZSIsIk9iamVjdCIsImVudHJpZXMiLCJrIiwidiIsImdldEl0ZW0iLCJwYXJzZSIsImtleXMiLCJjbGVhciIsImZpbmQiLCJpZFNldCIsInVwZGF0aW5nRGF0YSIsInNwbGljZSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUksWUFBTTtBQUN6QixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCLFFBQU1DLEdBQUcsR0FBR0MsOENBQUssQ0FBQ0MsU0FBTixDQUFnQjtBQUFFRixTQUFHLEVBQUUsS0FBUDtBQUFjRyxhQUFPLEVBQUU7QUFBdkIsS0FBaEIsQ0FBWjtBQUNBSCxPQUFHLENBQUNJLFdBQUosQ0FBZ0JILDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0I7QUFBRUYsU0FBRyxFQUFFLEdBQVA7QUFBWUcsYUFBTyxFQUFFO0FBQXJCLEtBQWhCLENBQWhCO0FBQ0FILE9BQUcsQ0FBQ0ksV0FBSixDQUFnQkgsOENBQUssQ0FBQ0MsU0FBTixDQUFnQjtBQUFFRixTQUFHLEVBQUUsR0FBUDtBQUFZRyxhQUFPLEVBQUU7QUFBckIsS0FBaEIsQ0FBaEI7QUFDQSxXQUFPSCxHQUFQO0FBQ0QsR0FMRDs7QUFPQSxNQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxNQUFELEVBQVNDLElBQVQsRUFBa0I7QUFDbENELFVBQU0sQ0FBQ0YsV0FBUCxDQUFtQkgsOENBQUssQ0FBQ0MsU0FBTixDQUFnQjtBQUNqQ0YsU0FBRyxFQUFFLElBRDRCO0FBQ3RCRyxhQUFPLEVBQUUsU0FEYTtBQUNGSyxVQUFJLEVBQUVEO0FBREosS0FBaEIsQ0FBbkI7QUFHQUQsVUFBTSxDQUFDRixXQUFQLENBQW1CSCw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCO0FBQ2pDRixTQUFHLEVBQUUsSUFENEI7QUFDdEJHLGFBQU8sRUFBRSw0QkFEYTtBQUNpQkssVUFBSSxFQUFFO0FBRHZCLEtBQWhCLENBQW5CO0FBR0QsR0FQRDs7QUFTQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQU9DLFNBQVAsRUFBcUI7QUFDcEMsUUFBTUMsS0FBSyxHQUFHWCw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCO0FBQzVCRixTQUFHLEVBQUUsS0FEdUI7QUFDaEJHLGFBQU8sWUFBS08sSUFBTDtBQURTLEtBQWhCLENBQWQ7QUFHQUwsYUFBUyxDQUFDTSxTQUFELEVBQVlWLDhDQUFLLENBQUNZLFVBQU4sQ0FBaUJILElBQWpCLENBQVosQ0FBVDtBQUNBQyxhQUFTLENBQUNQLFdBQVYsQ0FBc0JRLEtBQXRCO0FBQ0EsV0FBT0QsU0FBUDtBQUNELEdBUEQ7O0FBU0EsU0FBTztBQUFFWixXQUFPLEVBQVBBLE9BQUY7QUFBV1UsWUFBUSxFQUFSQTtBQUFYLEdBQVA7QUFDRCxDQTNCbUIsRUFBcEI7O0FBNkJBLElBQU1LLFlBQVksR0FBSSxZQUFNO0FBQzFCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsUUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBdEI7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBR2xCLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0I7QUFDdkNGLFNBQUcsRUFBRSxTQURrQztBQUN2Qm9CLFFBQUUsRUFBRSxTQURtQjtBQUNSakIsYUFBTyxFQUFFO0FBREQsS0FBaEIsQ0FBekI7QUFHQSxRQUFNa0IsYUFBYSxHQUFHcEIsOENBQUssQ0FBQ0MsU0FBTixDQUFnQjtBQUNwQ0YsU0FBRyxFQUFFLFNBRCtCO0FBQ3BCb0IsUUFBRSxFQUFFLE1BRGdCO0FBQ1JqQixhQUFPLEVBQUU7QUFERCxLQUFoQixDQUF0QjtBQUdBYSxpQkFBYSxDQUFDTSxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixjQUE1QjtBQUNBUCxpQkFBYSxDQUFDWixXQUFkLENBQTBCTixXQUFXLENBQUNXLFFBQVosQ0FBcUIsU0FBckIsRUFBZ0NVLGdCQUFoQyxDQUExQjtBQUNBSCxpQkFBYSxDQUFDWixXQUFkLENBQTBCTixXQUFXLENBQUNXLFFBQVosQ0FBcUIsTUFBckIsRUFBNkJZLGFBQTdCLENBQTFCO0FBQ0FGLG9CQUFnQixDQUFDZixXQUFqQixDQUE2Qm9CLG9EQUFVLENBQUNDLFFBQVgsQ0FBb0I7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBcEIsQ0FBN0I7QUFDQVAsb0JBQWdCLENBQUNmLFdBQWpCLENBQTZCTixXQUFXLENBQUNDLE9BQVosRUFBN0I7QUFDQXNCLGlCQUFhLENBQUNqQixXQUFkLENBQTBCb0Isb0RBQVUsQ0FBQ0MsUUFBWCxDQUFvQjtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFwQixDQUExQjtBQUNBLFdBQU9WLGFBQVA7QUFDRCxHQWZEOztBQWdCQSxTQUFPO0FBQUVELFVBQU0sRUFBTkE7QUFBRixHQUFQO0FBQ0QsQ0FsQm9CLEVBQXJCOztBQW9CQSxJQUFNWSxhQUFhLEdBQUksWUFBTTtBQUMzQixNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQXlCO0FBQUEsUUFBdEJDLFdBQXNCLFFBQXRCQSxXQUFzQjtBQUFBLFFBQVRULEVBQVMsUUFBVEEsRUFBUztBQUNsRCxRQUFNVSxPQUFPLEdBQUc3Qiw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCO0FBQzlCRixTQUFHLEVBQUUsSUFEeUI7QUFDbkJvQixRQUFFLEVBQUZBLEVBRG1CO0FBQ2ZqQixhQUFPLEVBQUU7QUFETSxLQUFoQixDQUFoQjtBQUlBMkIsV0FBTyxDQUFDQyxXQUFSLEdBQXNCRixXQUF0QjtBQUNBLFFBQU1HLFlBQVksR0FBR2YsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUFyQjtBQUNBYyxnQkFBWSxDQUFDNUIsV0FBYixDQUF5QjBCLE9BQXpCO0FBQ0QsR0FSRDs7QUFVQSxNQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxZQUFELEVBQWtCO0FBQ2pDQSxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQUFDLENBQUM7QUFBQSxhQUFJUixrQkFBa0IsQ0FBQ1EsQ0FBRCxDQUF0QjtBQUFBLEtBQXRCO0FBQ0QsR0FGRDs7QUFJQSxTQUFPO0FBQUVILFlBQVEsRUFBUkE7QUFBRixHQUFQO0FBQ0QsQ0FoQnFCLEVBQXRCOztBQWtCQSxJQUFNSSxVQUFVLEdBQUksWUFBTTtBQUN4QixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLFFBQXNCO0FBQUEsUUFBbkJDLElBQW1CLFNBQW5CQSxJQUFtQjtBQUFBLFFBQWJDLE1BQWEsU0FBYkEsTUFBYTtBQUM5QyxRQUFNQyxNQUFNLEdBQUd4Qyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCO0FBQzdCRixTQUFHLEVBQUUsT0FEd0I7QUFDZkcsYUFBTyxFQUFFO0FBRE0sS0FBaEIsQ0FBZjtBQUdBc0MsVUFBTSxDQUFDQyxJQUFQLEdBQWMsVUFBZDs7QUFDQSxRQUFJSCxJQUFKLEVBQVU7QUFDUkUsWUFBTSxDQUFDRSxPQUFQLEdBQWlCLElBQWpCO0FBQ0FILFlBQU0sQ0FBQ2xCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLE1BQXJCO0FBQ0Q7O0FBQ0QsV0FBT2tCLE1BQVA7QUFDRCxHQVZEOztBQVlBLE1BQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFFbEI7QUFBQSxRQURKQyxLQUNJLFNBREpBLEtBQ0k7QUFBQSxRQURHQyxJQUNILFNBREdBLElBQ0g7QUFBQSxRQURTQyxRQUNULFNBRFNBLFFBQ1Q7QUFBQSxRQURtQkMsV0FDbkIsU0FEbUJBLFdBQ25CO0FBQUEsUUFEZ0M1QixFQUNoQyxTQURnQ0EsRUFDaEM7QUFBQSxRQURvQ21CLElBQ3BDLFNBRG9DQSxJQUNwQztBQUNKLFFBQU1VLElBQUksR0FBR2hELDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0I7QUFDM0JGLFNBQUcsRUFBRSxLQURzQjtBQUNmb0IsUUFBRSxFQUFGQSxFQURlO0FBQ1hqQixhQUFPLG1DQUE0QjRDLFFBQTVCO0FBREksS0FBaEIsQ0FBYjtBQUdBRSxRQUFJLENBQUM3QyxXQUFMLENBQWlCa0MsaUJBQWlCLENBQUM7QUFBRUMsVUFBSSxFQUFKQSxJQUFGO0FBQVFDLFlBQU0sRUFBRVM7QUFBaEIsS0FBRCxDQUFsQztBQUNBQSxRQUFJLENBQUM3QyxXQUFMLENBQWlCSCw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCO0FBQy9CRixTQUFHLEVBQUUsSUFEMEI7QUFFL0JHLGFBQU8sRUFBRSx1QkFGc0I7QUFHL0JLLFVBQUksRUFBRXFDO0FBSHlCLEtBQWhCLENBQWpCO0FBS0FJLFFBQUksQ0FBQzdDLFdBQUwsQ0FBaUJILDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0I7QUFDL0JGLFNBQUcsRUFBRSxLQUQwQjtBQUUvQkcsYUFBTyxFQUFFLE1BRnNCO0FBRy9CSyxVQUFJLEVBQUVzQztBQUh5QixLQUFoQixDQUFqQjtBQUtBRyxRQUFJLENBQUM3QyxXQUFMLENBQWlCSCw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCO0FBQy9CRixTQUFHLEVBQUUsS0FEMEI7QUFFL0JHLGFBQU8sRUFBRSx5QkFGc0I7QUFHL0JLLFVBQUksRUFBRXdDO0FBSHlCLEtBQWhCLENBQWpCO0FBS0FDLFFBQUksQ0FBQzdDLFdBQUwsQ0FBaUJOLFdBQVcsQ0FBQ0MsT0FBWixFQUFqQjtBQUNBLFdBQU9rRCxJQUFQO0FBQ0QsR0F4QkQ7O0FBMEJBLE1BQU1oQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDaUIsUUFBRCxFQUFjO0FBQzdCLFFBQU1DLFNBQVMsR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBbEI7O0FBQ0EsV0FBT2lDLFNBQVMsQ0FBQ0MsVUFBakIsRUFBNkI7QUFDM0JELGVBQVMsQ0FBQ0UsV0FBVixDQUFzQkYsU0FBUyxDQUFDQyxVQUFoQztBQUNEOztBQUNERixZQUFRLENBQUNmLE9BQVQsQ0FBaUIsVUFBQUMsQ0FBQztBQUFBLGFBQUllLFNBQVMsQ0FBQy9DLFdBQVYsQ0FBc0J3QyxlQUFlLENBQUNSLENBQUQsQ0FBckMsQ0FBSjtBQUFBLEtBQWxCO0FBQ0QsR0FORDs7QUFRQSxTQUFPO0FBQUVILFlBQVEsRUFBUkE7QUFBRixHQUFQO0FBQ0QsQ0FoRGtCLEVBQW5COzs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUFBO0FBQUE7O0FBRUEsSUFBTVQsVUFBVSxHQUFJLFlBQU07QUFDeEIsTUFBTThCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BRWI7QUFBQSxRQURKQyxXQUNJLFFBREpBLFdBQ0k7QUFBQSxRQURTYixJQUNULFFBRFNBLElBQ1Q7QUFBQSxRQURlYyxZQUNmLFFBRGVBLFlBQ2Y7QUFBQSxRQUQ2QkMsUUFDN0IsUUFENkJBLFFBQzdCO0FBQ0osUUFBTUMsU0FBUyxHQUFHRCxRQUFRLElBQUksT0FBOUI7QUFDQSxRQUFNRSxJQUFJLEdBQUcxRCw4Q0FBSyxDQUFDMkQsWUFBTixDQUFtQkwsV0FBbkIsSUFBa0N0RCw4Q0FBSyxDQUFDNEQsbUJBQU4sQ0FBMEJOLFdBQTFCLENBQWxDLEdBQ1RBLFdBREo7QUFFQSxRQUFNTyxLQUFLLEdBQUc3RCw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCO0FBQUVGLFNBQUcsRUFBRSxLQUFQO0FBQWNHLGFBQU8sa0JBQVd3RCxJQUFYO0FBQXJCLEtBQWhCLENBQWQ7QUFDQSxRQUFNSSxLQUFLLEdBQUc5RCw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCO0FBQUVGLFNBQUcsRUFBRTBELFNBQVA7QUFBa0J0QyxRQUFFLEVBQUV1QyxJQUF0QjtBQUE0QnhELGFBQU8sRUFBRXdEO0FBQXJDLEtBQWhCLENBQWQ7QUFDQUksU0FBSyxDQUFDQyxZQUFOLENBQW1CLGFBQW5CLEVBQWtDVCxXQUFsQztBQUNBUSxTQUFLLENBQUNKLElBQU4sR0FBYUEsSUFBYjtBQUNBLFFBQUlqQixJQUFKLEVBQVVxQixLQUFLLENBQUNyQixJQUFOLEdBQWFBLElBQWI7QUFDVixRQUFJYyxZQUFKLEVBQWtCTyxLQUFLLENBQUNQLFlBQU4sR0FBcUJBLFlBQXJCO0FBQ2xCTSxTQUFLLENBQUMxRCxXQUFOLENBQWtCMkQsS0FBbEI7QUFDQSxXQUFPRCxLQUFQO0FBQ0QsR0FkRDs7QUFnQkEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQzFELElBQUQsRUFBT3VELEtBQVAsRUFBY25CLE9BQWQsRUFBMEI7QUFDN0MsUUFBTW9CLEtBQUssR0FBRzlELDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0I7QUFDNUJGLFNBQUcsRUFBRSxPQUR1QjtBQUNkb0IsUUFBRSxxQkFBY2IsSUFBZCxDQURZO0FBQ1VKLGFBQU8sRUFBRTtBQURuQixLQUFoQixDQUFkO0FBR0E0RCxTQUFLLENBQUNKLElBQU4sR0FBYSxVQUFiO0FBQ0FJLFNBQUssQ0FBQ3JCLElBQU4sR0FBYSxPQUFiO0FBQ0EsUUFBSUMsT0FBSixFQUFhb0IsS0FBSyxDQUFDcEIsT0FBTixHQUFnQixJQUFoQjtBQUNiLFFBQU11QixLQUFLLEdBQUdqRSw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCO0FBQUVGLFNBQUcsRUFBRSxPQUFQO0FBQWdCUSxVQUFJLEVBQUVEO0FBQXRCLEtBQWhCLENBQWQ7QUFDQTJELFNBQUssQ0FBQ0YsWUFBTixDQUFtQixLQUFuQixxQkFBc0N6RCxJQUF0QztBQUNBdUQsU0FBSyxDQUFDMUQsV0FBTixDQUFrQjJELEtBQWxCO0FBQ0FELFNBQUssQ0FBQzFELFdBQU4sQ0FBa0I4RCxLQUFsQjtBQUNELEdBWEQ7O0FBYUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDcEIsUUFBRCxFQUFjO0FBQ2xDLFFBQU1lLEtBQUssR0FBRzdELDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0I7QUFBRUYsU0FBRyxFQUFFLEtBQVA7QUFBY0csYUFBTyxFQUFFO0FBQXZCLEtBQWhCLENBQWQ7QUFDQSxRQUFJd0MsT0FBTyxHQUFHLENBQUMsSUFBRCxFQUFPLEtBQVAsQ0FBZDs7QUFDQSxRQUFJSSxRQUFRLElBQUlBLFFBQVEsS0FBSyxpQkFBN0IsRUFBZ0Q7QUFDOUNKLGFBQU8sR0FBRyxDQUFDLEtBQUQsRUFBUSxJQUFSLENBQVY7QUFDRDs7QUFDRHNCLGdCQUFZLENBQUMsUUFBRCxFQUFXSCxLQUFYLEVBQWtCbkIsT0FBTyxDQUFDLENBQUQsQ0FBekIsQ0FBWjtBQUNBc0IsZ0JBQVksQ0FBQyxRQUFELEVBQVdILEtBQVgsRUFBa0JuQixPQUFPLENBQUMsQ0FBRCxDQUF6QixDQUFaO0FBQ0EsV0FBT21CLEtBQVA7QUFDRCxHQVREOztBQVdBLE1BQU1yQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUFzQjtBQUFBLFFBQW5CQyxNQUFtQixTQUFuQkEsTUFBbUI7QUFBQSxRQUFYMEMsSUFBVyxTQUFYQSxJQUFXO0FBQ3JDLFFBQU1DLElBQUksR0FBR3BFLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0I7QUFDM0JGLFNBQUcsRUFBRSxNQURzQjtBQUNkRyxhQUFPLEVBQUVGLDhDQUFLLENBQUM0RCxtQkFBTixXQUE2Qm5DLE1BQTdCO0FBREssS0FBaEIsQ0FBYjtBQUdBMkMsUUFBSSxDQUFDL0MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CO0FBQ0EsUUFBTStDLFFBQVEsR0FBR3JFLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0I7QUFBRUYsU0FBRyxFQUFFO0FBQVAsS0FBaEIsQ0FBakI7QUFDQXFFLFFBQUksQ0FBQ2pFLFdBQUwsQ0FBaUJrRSxRQUFqQjs7QUFDQSxRQUFJNUMsTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDeEIsVUFBSTBDLElBQUosRUFBVUUsUUFBUSxDQUFDbEUsV0FBVCxDQUFxQmtELFVBQVUsQ0FBQztBQUFFQyxtQkFBVyxFQUFFLGNBQWY7QUFBK0JDLG9CQUFZLEVBQUVZLElBQUksQ0FBQ3ZDO0FBQWxELE9BQUQsQ0FBL0IsRUFBVixLQUNLeUMsUUFBUSxDQUFDbEUsV0FBVCxDQUFxQmtELFVBQVUsQ0FBQztBQUFFQyxtQkFBVyxFQUFFO0FBQWYsT0FBRCxDQUEvQjtBQUNOLEtBSEQsTUFHTztBQUNMZSxjQUFRLENBQUNsRSxXQUFULENBQXFCa0QsVUFBVSxDQUFDO0FBQzlCQyxtQkFBVyxFQUFFLE9BRGlCO0FBQ1JDLG9CQUFZLEVBQUVZLElBQUksR0FBR0EsSUFBSSxDQUFDdkIsS0FBUixHQUFnQjtBQUQxQixPQUFELENBQS9CO0FBR0F5QixjQUFRLENBQUNsRSxXQUFULENBQXFCa0QsVUFBVSxDQUFDO0FBQzlCQyxtQkFBVyxFQUFFLE1BRGlCO0FBRTlCYixZQUFJLEVBQUUsTUFGd0I7QUFHOUJjLG9CQUFZLEVBQUVZLElBQUksR0FBR0EsSUFBSSxDQUFDdEIsSUFBUixHQUFlN0MsOENBQUssQ0FBQ3NFLGdCQUFOLENBQXVCLENBQXZCO0FBSEgsT0FBRCxDQUEvQjtBQUtBRCxjQUFRLENBQUNsRSxXQUFULENBQXFCK0QsYUFBYSxDQUFDQyxJQUFJLEdBQUdBLElBQUksQ0FBQ3JCLFFBQVIsR0FBbUIsRUFBeEIsQ0FBbEM7QUFDQXVCLGNBQVEsQ0FBQ2xFLFdBQVQsQ0FBcUJrRCxVQUFVLENBQUM7QUFDOUJDLG1CQUFXLEVBQUUsYUFEaUI7QUFFOUJFLGdCQUFRLEVBQUUsVUFGb0I7QUFHOUJELG9CQUFZLEVBQUVZLElBQUksR0FBR0EsSUFBSSxDQUFDcEIsV0FBUixHQUFzQjtBQUhWLE9BQUQsQ0FBL0I7QUFLRDs7QUFDRCxXQUFPcUIsSUFBUDtBQUNELEdBM0JEOztBQTRCQSxTQUFPO0FBQUU1QyxZQUFRLEVBQVJBO0FBQUYsR0FBUDtBQUNELENBdEVrQixFQUFuQjs7QUF3RWVELHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFFQTtBQUFBLElBQU1nRCxhQUFhLEdBQUksWUFBTTtBQUMzQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFvQjtBQUFBLFFBQWpCckQsRUFBaUIsUUFBakJBLEVBQWlCO0FBQUEsUUFBYnNELE1BQWEsUUFBYkEsTUFBYTtBQUNyQyxRQUFNQyxNQUFNLEdBQUdELE1BQU0sR0FBR0EsTUFBTSxDQUFDRSxVQUFQLENBQWtCQSxVQUFyQixHQUFrQzNELFFBQVEsQ0FBQzRELGNBQVQsQ0FBd0J6RCxFQUF4QixDQUF2RDtBQUNBdUQsVUFBTSxDQUFDQyxVQUFQLENBQWtCdkIsV0FBbEIsQ0FBOEJzQixNQUE5QjtBQUNBLFdBQU9BLE1BQU0sQ0FBQ3ZELEVBQWQ7QUFDRCxHQUpEOztBQU1BLFNBQU87QUFBRXFELGNBQVUsRUFBVkE7QUFBRixHQUFQO0FBQ0QsQ0FScUIsRUFBdEI7O0FBVWVELDRFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTs7QUFFQSxJQUFNTSxXQUFXLEdBQUksWUFBTTtBQUN6QixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUMzRCxFQUFELEVBQVE7QUFDL0IsUUFBTVQsU0FBUyxHQUFHTSxRQUFRLENBQUM0RCxjQUFULENBQXdCekQsRUFBeEIsQ0FBbEI7QUFDQSxXQUFPVCxTQUFTLENBQUNxRSxnQkFBVixDQUEyQixPQUEzQixDQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLE9BQW9CO0FBQUEsUUFBakJiLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLFFBQVhDLElBQVcsUUFBWEEsSUFBVztBQUNoRCxRQUFNN0IsTUFBTSxHQUFHNkIsSUFBSSxDQUFDTyxVQUFwQjtBQUNBLFFBQUlwQyxNQUFNLENBQUNwQixFQUFQLENBQVU4RCxLQUFWLENBQWdCLEdBQWhCLEVBQXFCQyxNQUFyQixLQUFnQyxDQUFwQyxFQUF1QyxPQUFPQyxTQUFQO0FBQ3ZDLFFBQU1qRixPQUFPLEdBQUdxQyxNQUFNLENBQUNsQixTQUFQLENBQWlCK0QsS0FBakIsQ0FBdUJILEtBQXZCLENBQTZCLEdBQTdCLENBQWhCO0FBQ0FkLFFBQUksQ0FBQzdCLElBQUwsR0FBWXBDLE9BQU8sQ0FBQ21GLFFBQVIsQ0FBaUIsTUFBakIsQ0FBWjtBQUNBbEIsUUFBSSxDQUFDaEQsRUFBTCxHQUFVb0IsTUFBTSxDQUFDcEIsRUFBakI7QUFDQSxXQUFPZ0QsSUFBUDtBQUNELEdBUEQ7O0FBU0EsTUFBTW1CLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ25FLEVBQUQsRUFBUTtBQUMvQixRQUFNVCxTQUFTLEdBQUdNLFFBQVEsQ0FBQzRELGNBQVQsQ0FBd0J6RCxFQUF4QixDQUFsQjtBQUNBLFdBQU9ULFNBQVMsQ0FBQ3FFLGdCQUFWLENBQTJCLFdBQTNCLENBQVA7QUFDRCxHQUhEOztBQUtBLE1BQU1RLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUFNdkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixFQUFpRHVFLFVBQXZEO0FBQUEsR0FBdkI7O0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFNO0FBQ3JDLFFBQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUNBLFFBQU1DLE9BQU8sR0FBR0osY0FBYyxFQUE5QjtBQUNBLFFBQU1LLEdBQUcsR0FBR0QsT0FBTyxDQUFDVCxNQUFwQjs7QUFDQSxTQUFLLElBQUlXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEdBQXBCLEVBQXlCQyxDQUFDLEVBQTFCLEVBQThCO0FBQzVCLFVBQU0zRixPQUFPLEdBQUd5RixPQUFPLENBQUNFLENBQUQsQ0FBUCxDQUFXeEUsU0FBWCxDQUFxQitELEtBQXJCLENBQTJCSCxLQUEzQixDQUFpQyxHQUFqQyxDQUFoQjs7QUFDQSxVQUFJLENBQUMvRSxPQUFPLENBQUNtRixRQUFSLENBQWlCLGlCQUFqQixDQUFMLEVBQTBDO0FBQ3hDSyxrQkFBVSxDQUFDSSxJQUFYLENBQWdCSCxPQUFPLENBQUNFLENBQUQsQ0FBdkI7QUFDRDtBQUNGOztBQUNELFdBQU9ILFVBQVA7QUFDRCxHQVhEOztBQWFBLE1BQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQzVFLEVBQUQsRUFBUTtBQUM1QixRQUFNNkUsUUFBUSxHQUFHaEYsUUFBUSxDQUFDNEQsY0FBVCxDQUF3QnpELEVBQXhCLENBQWpCO0FBQ0EsUUFBTThFLElBQUksR0FBR0QsUUFBUSxDQUFDL0UsYUFBVCxDQUF1QixjQUF2QixDQUFiO0FBQ0EsUUFBTW1ELElBQUksR0FBRzRCLFFBQVEsQ0FBQy9FLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLFdBQU87QUFBRW1ELFVBQUksRUFBSkEsSUFBRjtBQUFRNkIsVUFBSSxFQUFKQTtBQUFSLEtBQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNwQyxLQUFELEVBQVFLLElBQVIsRUFBaUI7QUFDcEMsUUFBTWdDLE1BQU0sR0FBR3JDLEtBQUssQ0FBQ2EsVUFBTixDQUFpQkksZ0JBQWpCLENBQWtDLE9BQWxDLENBQWY7QUFDQW9CLFVBQU0sQ0FBQ2pFLE9BQVAsQ0FBZSxVQUFDa0UsS0FBRCxFQUFXO0FBQ3hCLFVBQUlBLEtBQUssQ0FBQzFELE9BQVYsRUFBbUI7QUFDakJ5QixZQUFJLENBQUNpQyxLQUFLLENBQUMxQyxJQUFQLENBQUosR0FBbUIwQyxLQUFLLENBQUNqRixFQUF6QjtBQUNEO0FBQ0YsS0FKRDtBQUtELEdBUEQ7O0FBU0EsTUFBTWtGLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNqQyxJQUFELEVBQVU7QUFDNUIsUUFBTUQsSUFBSSxHQUFHLEVBQWI7QUFDQUMsUUFBSSxDQUFDVyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQzdDLE9BQWhDLENBQXdDLFVBQUMyQixLQUFELEVBQVc7QUFDakQsVUFBTW1DLFFBQVEsR0FBR25DLEtBQUssQ0FBQzVDLGFBQU4sQ0FBb0IsT0FBcEIsS0FBZ0M0QyxLQUFLLENBQUM1QyxhQUFOLENBQW9CLFVBQXBCLENBQWpEOztBQUNBLFVBQUkrRSxRQUFRLENBQUN2RCxJQUFULEtBQWtCLE9BQXRCLEVBQStCO0FBQzdCeUQsb0JBQVksQ0FBQ0YsUUFBRCxFQUFXN0IsSUFBWCxDQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTW1DLEdBQUcsR0FBR3RHLDhDQUFLLENBQUN1RyxxQkFBTixDQUE0QlAsUUFBUSxDQUFDdEMsSUFBckMsQ0FBWjtBQURLLFlBRUcwQixLQUZILEdBRWFZLFFBRmIsQ0FFR1osS0FGSDtBQUdMakIsWUFBSSxDQUFDbUMsR0FBRCxDQUFKLEdBQVlsQixLQUFaO0FBQ0Q7QUFDRixLQVREO0FBVUEsV0FBT2pCLElBQVA7QUFDRCxHQWJEOztBQWVBLE1BQU1xQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLFNBQUQsRUFBZTtBQUMxQyxRQUFJQSxTQUFKLEVBQWU7QUFDYixhQUFPekYsUUFBUSxDQUFDQyxhQUFULFlBQTJCd0YsU0FBM0IsRUFBUDtBQUNEOztBQUNELFFBQUl6RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLEVBQWlEdUUsVUFBakQsQ0FBNEROLE1BQTVELEdBQXFFLENBQXpFLEVBQTRFO0FBQzFFLGFBQU9sRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLEVBQWlEeUYsU0FBeEQ7QUFDRDs7QUFDRCxXQUFPdkIsU0FBUDtBQUNELEdBUkQ7O0FBVUEsTUFBTXdCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ3hGLEVBQUQsRUFBUTtBQUNqQyxRQUFNVCxTQUFTLEdBQUdNLFFBQVEsQ0FBQzRELGNBQVQsQ0FBd0J6RCxFQUF4QixDQUFsQjtBQUNBLFdBQU9ULFNBQVMsQ0FBQ3FFLGdCQUFWLENBQTJCLFNBQTNCLENBQVA7QUFDRCxHQUhEOztBQUtBLE1BQU02QixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBTXJFLE1BQU0sR0FBR3ZCLFFBQVEsQ0FBQzRELGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZjtBQUNBLFdBQU9yQyxNQUFNLENBQUN0QixhQUFQLENBQXFCLFVBQXJCLENBQVA7QUFDRCxHQUhEOztBQUtBLFNBQU87QUFDTDZELG9CQUFnQixFQUFoQkEsZ0JBREs7QUFFTEUseUJBQXFCLEVBQXJCQSxxQkFGSztBQUdMTSxvQkFBZ0IsRUFBaEJBLGdCQUhLO0FBSUxDLGtCQUFjLEVBQWRBLGNBSks7QUFLTEUsNEJBQXdCLEVBQXhCQSx3QkFMSztBQU1MTSxpQkFBYSxFQUFiQSxhQU5LO0FBT0xNLGVBQVcsRUFBWEEsV0FQSztBQVFMRyx3QkFBb0IsRUFBcEJBLG9CQVJLO0FBU0xHLHNCQUFrQixFQUFsQkEsa0JBVEs7QUFVTEMsa0JBQWMsRUFBZEE7QUFWSyxHQUFQO0FBWUQsQ0FsR21CLEVBQXBCOztBQW9HZS9CLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLElBQU1nQyxhQUFhLEdBQUksWUFBTTtBQUMzQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUMxQyxJQUFELEVBQVU7QUFDOUJBLFFBQUksQ0FBQy9DLFNBQUwsQ0FBZTBGLE1BQWYsQ0FBc0IsUUFBdEI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ3ZDLE1BQUQsRUFBWTtBQUN0Q0EsVUFBTSxDQUFDcEQsU0FBUCxDQUFpQjBGLE1BQWpCLENBQXdCLGdCQUF4QjtBQUNELEdBRkQ7O0FBSUEsTUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDeEMsTUFBRCxFQUFZO0FBQ2pDLFFBQU15QyxHQUFHLEdBQUdsRyxRQUFRLENBQUMrRCxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBWjtBQUNBbUMsT0FBRyxDQUFDaEYsT0FBSixDQUFZLFVBQUNDLENBQUQsRUFBTztBQUNqQixVQUFJQSxDQUFDLEtBQUtzQyxNQUFWLEVBQWtCdEMsQ0FBQyxDQUFDZCxTQUFGLENBQVkwRixNQUFaLENBQW1CLHFCQUFuQjtBQUNuQixLQUZEO0FBR0QsR0FMRDs7QUFPQSxNQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQXNCO0FBQUEsUUFBbkIxRyxJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxRQUFiaUUsTUFBYSxRQUFiQSxNQUFhO0FBQzFDLFFBQU1QLElBQUksR0FBRyxFQUFiO0FBQ0EsUUFBTTlDLFNBQVMsR0FBR3FELE1BQU0sQ0FBQ3JELFNBQVAsQ0FBaUIrRCxLQUFqQixDQUF1QkgsS0FBdkIsQ0FBNkIsR0FBN0IsQ0FBbEI7O0FBQ0EsUUFBSXhFLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQ3RCMEQsVUFBSSxDQUFDdkMsV0FBTCxHQUFtQjhDLE1BQU0sQ0FBQzBDLFNBQTFCO0FBQ0ExQyxZQUFNLENBQUMwQyxTQUFQLEdBQW1CLEVBQW5CO0FBQ0Q7O0FBQ0QsUUFBSTNHLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CLFdBQUssSUFBSW9GLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUduQixNQUFNLENBQUNjLFVBQVAsQ0FBa0JOLE1BQWxCLEdBQTJCLENBQS9DLEVBQWtEVyxDQUFDLEVBQW5ELEVBQXVEO0FBQ3JELFlBQU1yRCxNQUFNLEdBQUdrQyxNQUFNLENBQUNjLFVBQVAsQ0FBa0JLLENBQWxCLENBQWY7QUFDQSxZQUFNd0IsU0FBUyxHQUFHN0UsTUFBTSxDQUFDbkIsU0FBUCxDQUFpQixDQUFqQixDQUFsQjtBQUNBLFlBQU1kLElBQUksR0FBR2lDLE1BQU0sQ0FBQzRFLFNBQXBCO0FBQ0FqRCxZQUFJLENBQUNrRCxTQUFELENBQUosR0FBa0I5RyxJQUFsQjtBQUNBaUMsY0FBTSxDQUFDNEUsU0FBUCxHQUFtQixFQUFuQjtBQUNEOztBQUNEMUMsWUFBTSxDQUFDdkIsVUFBUCxDQUFrQm1FLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxNQUFsQztBQUNEOztBQUNELFFBQUk5RyxJQUFJLEtBQUssTUFBYixFQUFxQjBELElBQUksQ0FBQ3JCLFFBQUwsR0FBZ0J6QixTQUFTLENBQUNnRSxRQUFWLENBQW1CLGlCQUFuQixJQUF3QyxpQkFBeEMsR0FBNEQsaUJBQTVFO0FBQ3JCLFdBQU87QUFBRWxCLFVBQUksRUFBSkE7QUFBRixLQUFQO0FBQ0QsR0FuQkQ7O0FBcUJBLE1BQU1xRCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLFFBQW9CO0FBQUEsUUFBakJyRyxFQUFpQixTQUFqQkEsRUFBaUI7QUFBQSxRQUFic0QsTUFBYSxTQUFiQSxNQUFhO0FBQ3pDLFFBQU1DLE1BQU0sR0FBR0QsTUFBTSxHQUFHQSxNQUFNLENBQUNFLFVBQVAsQ0FBa0JBLFVBQXJCLEdBQWtDM0QsUUFBUSxDQUFDNEQsY0FBVCxDQUF3QnpELEVBQXhCLENBQXZEO0FBQ0EsUUFBTVYsSUFBSSxHQUFHaUUsTUFBTSxDQUFDdkQsRUFBUCxDQUFVOEQsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFiO0FBQ0EsUUFBTXdDLFVBQVUsR0FBRy9DLE1BQU0sQ0FBQ3pELGFBQVAsQ0FBcUIsTUFBckIsQ0FBbkI7O0FBQ0EsUUFBSXdHLFVBQUosRUFBZ0I7QUFDZCxhQUFPO0FBQUVDLGNBQU0sRUFBRSxRQUFWO0FBQW9CdEQsWUFBSSxFQUFFcUQ7QUFBMUIsT0FBUDtBQUNEOztBQU53Qyx5QkFPeEJOLGFBQWEsQ0FBQztBQUFFMUcsVUFBSSxFQUFKQSxJQUFGO0FBQVFpRSxZQUFNLEVBQU5BO0FBQVIsS0FBRCxDQVBXO0FBQUEsUUFPakNQLElBUGlDLGtCQU9qQ0EsSUFQaUM7O0FBUXpDLFFBQU1DLElBQUksR0FBRzdDLG9EQUFVLENBQUNDLFFBQVgsQ0FBb0I7QUFBRUMsWUFBTSxFQUFFaEIsSUFBVjtBQUFnQjBELFVBQUksRUFBSkE7QUFBaEIsS0FBcEIsQ0FBYjtBQUNBTyxVQUFNLENBQUN2RSxXQUFQLENBQW1CaUUsSUFBbkI7QUFDQTBDLGlCQUFhLENBQUMxQyxJQUFELENBQWI7QUFDQSxXQUFPO0FBQUVzRCxZQUFNLEVBQUUsUUFBVjtBQUFvQnRELFVBQUksRUFBSkE7QUFBcEIsS0FBUDtBQUNELEdBWkQ7O0FBY0EsTUFBTXVELFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNsRCxNQUFELEVBQVk7QUFDN0IsUUFBTUMsTUFBTSxHQUFHRCxNQUFNLENBQUNFLFVBQXRCO0FBQ0FELFVBQU0sQ0FBQ3JELFNBQVAsQ0FBaUIwRixNQUFqQixDQUF3QixNQUF4QjtBQUNBLFdBQU9yQyxNQUFNLENBQUN2RCxFQUFkO0FBQ0QsR0FKRDs7QUFNQSxNQUFNeUcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxNQUFELEVBQVk7QUFDdkMsUUFBTTlGLFlBQVksR0FBR2YsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUFyQjtBQUNBLFFBQU02RyxRQUFRLEdBQUcvRixZQUFZLENBQUNkLGFBQWIsQ0FBMkIsa0JBQTNCLENBQWpCO0FBQ0EsUUFBSTZHLFFBQUosRUFBY0EsUUFBUSxDQUFDekcsU0FBVCxDQUFtQjBHLE1BQW5CLENBQTBCLGlCQUExQjtBQUNkRixVQUFNLENBQUN4RyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixpQkFBckI7QUFDQSxXQUFPdUcsTUFBTSxDQUFDMUcsRUFBZDtBQUNELEdBTkQ7O0FBUUEsTUFBTTZHLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQzVELElBQUQsRUFBVTtBQUM5QkEsUUFBSSxDQUFDVyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQzdDLE9BQWhDLENBQXdDLFVBQUMyQixLQUFELEVBQVc7QUFDakQsVUFBTW1DLFFBQVEsR0FBR25DLEtBQUssQ0FBQzVDLGFBQU4sQ0FBb0IsT0FBcEIsS0FBZ0M0QyxLQUFLLENBQUM1QyxhQUFOLENBQW9CLFVBQXBCLENBQWpEO0FBQ0ErRSxjQUFRLENBQUNaLEtBQVQsR0FBaUIsRUFBakI7QUFDRCxLQUhEO0FBSUQsR0FMRDs7QUFPQSxTQUFPO0FBQ0x1QyxjQUFVLEVBQVZBLFVBREs7QUFFTFgsdUJBQW1CLEVBQW5CQSxtQkFGSztBQUdMRixpQkFBYSxFQUFiQSxhQUhLO0FBSUxVLGtCQUFjLEVBQWRBLGNBSks7QUFLTEksd0JBQW9CLEVBQXBCQSxvQkFMSztBQU1MSSxpQkFBYSxFQUFiQSxhQU5LO0FBT0xmLGtCQUFjLEVBQWRBO0FBUEssR0FBUDtBQVNELENBakZxQixFQUF0Qjs7QUFtRmVKLDRFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUFBLElBQU03RyxLQUFLLEdBQUksWUFBTTtBQUNuQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUVaO0FBQUEsUUFESkYsR0FDSSxRQURKQSxHQUNJO0FBQUEsUUFEQ29CLEVBQ0QsUUFEQ0EsRUFDRDtBQUFBLFFBREtqQixPQUNMLFFBREtBLE9BQ0w7QUFBQSxRQURjSyxJQUNkLFFBRGNBLElBQ2Q7QUFDSixRQUFNMEgsR0FBRyxHQUFHakgsUUFBUSxDQUFDa0gsYUFBVCxDQUF1Qm5JLEdBQXZCLENBQVo7QUFDQSxRQUFJb0IsRUFBSixFQUFROEcsR0FBRyxDQUFDbEUsWUFBSixDQUFpQixJQUFqQixFQUF1QjVDLEVBQXZCO0FBQ1IsUUFBSWpCLE9BQUosRUFBYUEsT0FBTyxDQUFDK0UsS0FBUixDQUFjLEdBQWQsRUFBbUIvQyxPQUFuQixDQUEyQixVQUFBaUcsSUFBSTtBQUFBLGFBQUlGLEdBQUcsQ0FBQzVHLFNBQUosQ0FBY0MsR0FBZCxDQUFrQjZHLElBQWxCLENBQUo7QUFBQSxLQUEvQjtBQUNiLFFBQUk1SCxJQUFKLEVBQVUwSCxHQUFHLENBQUNuRyxXQUFKLEdBQWtCdkIsSUFBbEI7QUFDVixXQUFPMEgsR0FBUDtBQUNELEdBUkQ7O0FBVUEsTUFBTTNELGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQzhELE9BQUQsRUFBYTtBQUNwQyxRQUFJdkYsSUFBSSxHQUFHLElBQUl3RixJQUFKLEVBQVg7QUFDQXhGLFFBQUksQ0FBQ3lGLE9BQUwsQ0FBYXpGLElBQUksQ0FBQzBGLE9BQUwsS0FBaUJILE9BQTlCO0FBQ0EsUUFBTUksRUFBRSxHQUFHQyxNQUFNLENBQUM1RixJQUFJLENBQUMwRixPQUFMLEVBQUQsQ0FBTixDQUF1QkcsUUFBdkIsQ0FBZ0MsQ0FBaEMsRUFBbUMsR0FBbkMsQ0FBWDtBQUNBLFFBQU1DLEVBQUUsR0FBR0YsTUFBTSxDQUFDNUYsSUFBSSxDQUFDK0YsUUFBTCxLQUFrQixDQUFuQixDQUFOLENBQTRCRixRQUE1QixDQUFxQyxDQUFyQyxFQUF3QyxHQUF4QyxDQUFYLENBSm9DLENBSXFCOztBQUN6RCxRQUFNRyxJQUFJLEdBQUdoRyxJQUFJLENBQUNpRyxXQUFMLEVBQWI7QUFDQWpHLFFBQUksYUFBTWdHLElBQU4sY0FBY0YsRUFBZCxjQUFvQkgsRUFBcEIsQ0FBSjtBQUNBLFdBQU8zRixJQUFQO0FBQ0QsR0FSRDs7QUFVQSxNQUFNa0csY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQU12RixRQUFRLEdBQUd4QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7QUFDQXVDLFlBQVEsQ0FBQ3dGLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQU07QUFDdkN4RixjQUFRLENBQUM4RCxLQUFULENBQWUyQixNQUFmLEdBQXdCLE1BQXhCO0FBQ0F6RixjQUFRLENBQUM4RCxLQUFULENBQWUyQixNQUFmLGFBQTJCLEtBQUt6RixRQUFRLENBQUMwRixZQUF6QztBQUNELEtBSEQ7QUFJRCxHQU5EOztBQVFBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUMzRyxNQUFELEVBQVk7QUFDM0IsUUFBSUEsTUFBSixFQUFZQSxNQUFNLENBQUN2QixhQUFQLENBQXFCLE9BQXJCLEVBQThCbUksS0FBOUI7QUFDYixHQUZEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FBTUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixFQUFOO0FBQUEsR0FBckI7O0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDekUsS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBSjtBQUFBLEdBQWxDOztBQUVBLE1BQU1yRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBTixJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDcUosTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixLQUErQnRKLElBQUksQ0FBQ3VKLEtBQUwsQ0FBVyxDQUFYLENBQW5DO0FBQUEsR0FBdkI7O0FBRUEsTUFBTXRELHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ2pHLElBQUQsRUFBVTtBQUN0QyxRQUFNb0osS0FBSyxHQUFHcEosSUFBSSxDQUFDMkUsS0FBTCxDQUFXLEdBQVgsQ0FBZDs7QUFDQSxRQUFJeUUsS0FBSyxDQUFDeEUsTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ3BCd0UsV0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXOUksVUFBVSxDQUFDOEksS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFyQjtBQUNEOztBQUNELFdBQU9BLEtBQUssQ0FBQ0ksSUFBTixDQUFXLEVBQVgsQ0FBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTWxHLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQXRELElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUMyRSxLQUFMLENBQVcsR0FBWCxFQUFnQjZFLElBQWhCLENBQXFCLEdBQXJCLENBQUo7QUFBQSxHQUFoQzs7QUFFQSxNQUFNbkcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQXJELElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUMyRSxLQUFMLENBQVcsR0FBWCxFQUFnQkMsTUFBaEIsR0FBeUIsQ0FBN0I7QUFBQSxHQUF6Qjs7QUFFQSxNQUFNNkUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCaEIsa0JBQWM7QUFDZEksWUFBUTtBQUNULEdBSEQ7O0FBS0EsU0FBTztBQUNMbEosYUFBUyxFQUFUQSxTQURLO0FBRUxxRSxvQkFBZ0IsRUFBaEJBLGdCQUZLO0FBR0xtRix3QkFBb0IsRUFBcEJBLG9CQUhLO0FBSUxsRCx5QkFBcUIsRUFBckJBLHFCQUpLO0FBS0wzQyx1QkFBbUIsRUFBbkJBLG1CQUxLO0FBTUxELGdCQUFZLEVBQVpBLFlBTks7QUFPTG9GLGtCQUFjLEVBQWRBLGNBUEs7QUFRTEksWUFBUSxFQUFSQSxRQVJLO0FBU0xFLGdCQUFZLEVBQVpBLFlBVEs7QUFVTFUsa0JBQWMsRUFBZEEsY0FWSztBQVdMbkosY0FBVSxFQUFWQTtBQVhLLEdBQVA7QUFhRCxDQXJFYSxFQUFkOztBQXVFZVosb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWdLLGdCQUFnQixHQUFJLFlBQU07QUFDOUIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBaEksWUFBWTtBQUFBLFdBQUlQLHFFQUFhLENBQUNNLFFBQWQsQ0FBdUJDLFlBQXZCLENBQUo7QUFBQSxHQUFwQzs7QUFDQSxNQUFNaUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsU0FBUztBQUFBLFdBQUkvSCxrRUFBVSxDQUFDSixRQUFYLENBQW9CbUksU0FBcEIsQ0FBSjtBQUFBLEdBQTlCOztBQUNBLE1BQU1ySixNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1ELG9FQUFZLENBQUNDLE1BQWIsRUFBTjtBQUFBLEdBQWY7O0FBRUEsTUFBTWlGLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQTVFLEVBQUU7QUFBQSxXQUFJMEQsNkRBQVcsQ0FBQ2tCLGFBQVosQ0FBMEI1RSxFQUExQixDQUFKO0FBQUEsR0FBeEI7O0FBQ0EsTUFBTWtGLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNqQyxJQUFELEVBQU9xQyxTQUFQO0FBQUEsV0FBcUI1Qiw2REFBVyxDQUFDd0IsV0FBWixDQUF3QmpDLElBQXhCLEVBQThCcUMsU0FBOUIsQ0FBckI7QUFBQSxHQUFwQjs7QUFDQSxNQUFNdUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBNUQsSUFBSTtBQUFBLFdBQUl5QywrREFBYSxDQUFDbUIsYUFBZCxDQUE0QjVELElBQTVCLENBQUo7QUFBQSxHQUExQjs7QUFFQSxNQUFNNkMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBeEMsTUFBTTtBQUFBLFdBQUlvQywrREFBYSxDQUFDSSxjQUFkLENBQTZCeEMsTUFBN0IsQ0FBSjtBQUFBLEdBQTdCOztBQUNBLE1BQU1rQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUF4RixFQUFFO0FBQUEsV0FBSTBELDZEQUFXLENBQUM4QixrQkFBWixDQUErQnhGLEVBQS9CLENBQUo7QUFBQSxHQUE3Qjs7QUFDQSxNQUFNcUQsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQXlELEdBQUc7QUFBQSxXQUFJMUQsK0RBQWEsQ0FBQ0MsVUFBZCxDQUF5QnlELEdBQXpCLENBQUo7QUFBQSxHQUF0Qjs7QUFDQSxNQUFNckIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFdBQU0vQiw2REFBVyxDQUFDK0IsY0FBWixFQUFOO0FBQUEsR0FBdkI7O0FBRUEsTUFBTXJCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUFNc0IsK0RBQWEsQ0FBQ3RCLGNBQWQsRUFBTjtBQUFBLEdBQXZCOztBQUNBLE1BQU1xQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUFDLE1BQU07QUFBQSxXQUFJaEIsK0RBQWEsQ0FBQ2Usb0JBQWQsQ0FBbUNDLE1BQW5DLENBQUo7QUFBQSxHQUFuQzs7QUFDQSxNQUFNckIsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBQyxTQUFTO0FBQUEsV0FBSTVCLDZEQUFXLENBQUMyQixvQkFBWixDQUFpQ0MsU0FBakMsQ0FBSjtBQUFBLEdBQXRDOztBQUNBLE1BQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQTFDLElBQUk7QUFBQSxXQUFJeUMsK0RBQWEsQ0FBQ0MsYUFBZCxDQUE0QjFDLElBQTVCLENBQUo7QUFBQSxHQUExQjs7QUFDQSxNQUFNNEMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBdkMsTUFBTTtBQUFBLFdBQUlvQywrREFBYSxDQUFDRyxtQkFBZCxDQUFrQ3ZDLE1BQWxDLENBQUo7QUFBQSxHQUFsQzs7QUFFQSxNQUFNYSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFuRSxFQUFFO0FBQUEsV0FBSTBELDZEQUFXLENBQUNTLGdCQUFaLENBQTZCbkUsRUFBN0IsQ0FBSjtBQUFBLEdBQTNCOztBQUNBLE1BQU13RyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBbEQsTUFBTTtBQUFBLFdBQUlvQywrREFBYSxDQUFDYyxVQUFkLENBQXlCbEQsTUFBekIsQ0FBSjtBQUFBLEdBQXpCOztBQUNBLE1BQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQTNELEVBQUU7QUFBQSxXQUFJMEQsNkRBQVcsQ0FBQ0MsZ0JBQVosQ0FBNkIzRCxFQUE3QixDQUFKO0FBQUEsR0FBM0I7O0FBQ0EsTUFBTXFHLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQVMsR0FBRztBQUFBLFdBQUlwQiwrREFBYSxDQUFDVyxjQUFkLENBQTZCUyxHQUE3QixDQUFKO0FBQUEsR0FBMUI7O0FBQ0EsTUFBTWpELHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQWlELEdBQUc7QUFBQSxXQUFJcEQsNkRBQVcsQ0FBQ0cscUJBQVosQ0FBa0NpRCxHQUFsQyxDQUFKO0FBQUEsR0FBakM7O0FBQ0EsTUFBTXhDLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkI7QUFBQSxXQUFNWiw2REFBVyxDQUFDWSx3QkFBWixFQUFOO0FBQUEsR0FBakM7O0FBRUEsTUFBTTBELFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUEzRyxNQUFNO0FBQUEsV0FBSXhDLHNEQUFLLENBQUNtSixRQUFOLENBQWUzRyxNQUFmLENBQUo7QUFBQSxHQUF2Qjs7QUFDQSxNQUFNNkcsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxXQUFNckosc0RBQUssQ0FBQ3FKLFlBQU4sRUFBTjtBQUFBLEdBQXJCOztBQUNBLE1BQU1VLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUFNL0osc0RBQUssQ0FBQytKLGNBQU4sRUFBTjtBQUFBLEdBQXZCOztBQUVBLFNBQU87QUFDTGpKLFVBQU0sRUFBTkEsTUFESztBQUVMb0osZ0JBQVksRUFBWkEsWUFGSztBQUdMRCxtQkFBZSxFQUFmQSxlQUhLO0FBSUxsRSxpQkFBYSxFQUFiQSxhQUpLO0FBS0xNLGVBQVcsRUFBWEEsV0FMSztBQU1MMkIsaUJBQWEsRUFBYkEsYUFOSztBQU9MZixrQkFBYyxFQUFkQSxjQVBLO0FBUUxOLHNCQUFrQixFQUFsQkEsa0JBUks7QUFTTG5DLGNBQVUsRUFBVkEsVUFUSztBQVVMb0Msa0JBQWMsRUFBZEEsY0FWSztBQVdMckIsa0JBQWMsRUFBZEEsY0FYSztBQVlMcUMsd0JBQW9CLEVBQXBCQSxvQkFaSztBQWFMcEIsd0JBQW9CLEVBQXBCQSxvQkFiSztBQWNMbEIsb0JBQWdCLEVBQWhCQSxnQkFkSztBQWVMcUMsY0FBVSxFQUFWQSxVQWZLO0FBZ0JMYixpQkFBYSxFQUFiQSxhQWhCSztBQWlCTEUsdUJBQW1CLEVBQW5CQSxtQkFqQks7QUFrQkxsQyxvQkFBZ0IsRUFBaEJBLGdCQWxCSztBQW1CTDBDLGtCQUFjLEVBQWRBLGNBbkJLO0FBb0JMeEMseUJBQXFCLEVBQXJCQSxxQkFwQks7QUFxQkxtRSxZQUFRLEVBQVJBLFFBckJLO0FBc0JMRSxnQkFBWSxFQUFaQSxZQXRCSztBQXVCTDVELDRCQUF3QixFQUF4QkEsd0JBdkJLO0FBd0JMc0Usa0JBQWMsRUFBZEE7QUF4QkssR0FBUDtBQTBCRCxDQXpEd0IsRUFBekI7O0FBMkRlQywrRUFBZixFOzs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNSSxhQUFhLEdBQUksWUFBTTtBQUMzQixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBTXBJLFlBQVksR0FBR3FJLHdEQUFjLENBQUMvRSxjQUFmLEVBQXJCO0FBQ0F5RSw4REFBZ0IsQ0FBQ0MsZUFBakIsQ0FBaUNoSSxZQUFqQztBQUNELEdBSEQ7O0FBS0EsTUFBTXNJLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUosU0FBUyxHQUFHRyx3REFBYyxDQUFDRSxxQkFBZixFQUFsQjtBQUNBUiw4REFBZ0IsQ0FBQ0UsWUFBakIsQ0FBOEJDLFNBQTlCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNdkMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDbkQsTUFBRCxFQUFZO0FBQ3ZDLFFBQU1nQyxTQUFTLEdBQUd1RCwwREFBZ0IsQ0FBQ3BDLG9CQUFqQixDQUFzQ25ELE1BQXRDLENBQWxCO0FBQ0E2Riw0REFBYyxDQUFDRyx3QkFBZixDQUF3Q2hFLFNBQXhDO0FBQ0F1RCw4REFBZ0IsQ0FBQ2hELG1CQUFqQixDQUFxQ3ZDLE1BQXJDO0FBQ0E4RixlQUFXO0FBQ1osR0FMRDs7QUFPQSxNQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUN0RyxJQUFELEVBQVU7QUFDaEM0Riw4REFBZ0IsQ0FBQ2hDLGFBQWpCLENBQStCNUQsSUFBL0I7QUFDQTRGLDhEQUFnQixDQUFDWCxZQUFqQjtBQUNELEdBSEQ7O0FBS0EsTUFBTXNCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNsSyxJQUFELEVBQU8yRCxJQUFQLEVBQWdCO0FBQ2pDLFFBQU1ELElBQUksR0FBRzZGLDBEQUFnQixDQUFDM0QsV0FBakIsQ0FBNkJqQyxJQUE3QixDQUFiOztBQUNBLFFBQUk0RiwwREFBZ0IsQ0FBQ2hGLHFCQUFqQixDQUF1QztBQUFFYixVQUFJLEVBQUpBLElBQUY7QUFBUUMsVUFBSSxFQUFKQTtBQUFSLEtBQXZDLENBQUosRUFBNEQ7QUFDMURrRyw4REFBYyxDQUFDTSxVQUFmLENBQTBCO0FBQUV6RyxZQUFJLEVBQUpBO0FBQUYsT0FBMUI7QUFDQW1HLDhEQUFjLENBQUNPLFVBQWYsQ0FBMEI7QUFBRTFKLFVBQUUsRUFBRWdELElBQUksQ0FBQ2hELEVBQVg7QUFBZWdELFlBQUksRUFBSkE7QUFBZixPQUExQjtBQUNELEtBSEQsTUFHTztBQUNMLFVBQUkxRCxJQUFJLEtBQUssU0FBYixFQUF3QjtBQUN0QjZKLGdFQUFjLENBQUNRLGNBQWYsQ0FBOEIzRyxJQUE5QjtBQUNEOztBQUNELFVBQUkxRCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQjBELFlBQUksQ0FBQ3NDLFNBQUwsR0FBaUI2RCx3REFBYyxDQUFDUyxpQkFBZixFQUFqQjtBQUNBVCxnRUFBYyxDQUFDVSxXQUFmLENBQTJCN0csSUFBM0I7QUFDRDtBQUNGOztBQUNEdUcsbUJBQWUsQ0FBQ3RHLElBQUQsQ0FBZjtBQUNELEdBZkQ7O0FBaUJBLE1BQU02Ryx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLEdBQU07QUFDckMsUUFBTXhFLFNBQVMsR0FBRzZELHdEQUFjLENBQUNTLGlCQUFmLEVBQWxCO0FBQ0EsUUFBTUcsVUFBVSxHQUFHbEIsMERBQWdCLENBQUN4RCxvQkFBakIsQ0FBc0NDLFNBQXRDLENBQW5CO0FBQ0EsUUFBSXlFLFVBQUosRUFBZ0J0RCxvQkFBb0IsQ0FBQ3NELFVBQUQsQ0FBcEI7QUFDakIsR0FKRDs7QUFNQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUMvRyxJQUFELEVBQU8zRCxJQUFQLEVBQWdCO0FBQzFDMkQsUUFBSSxDQUFDNEUsZ0JBQUwsQ0FBc0IsVUFBdEIsRUFBa0MsVUFBQzdHLENBQUQsRUFBTztBQUN2QyxVQUFJQSxDQUFDLENBQUNpSixPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDcEJqSixTQUFDLENBQUNrSixjQUFGO0FBQ0FWLGtCQUFVLENBQUNsSyxJQUFELEVBQU8yRCxJQUFQLENBQVY7QUFDRDtBQUNGLEtBTEQ7QUFNRCxHQVBEOztBQVNBLE1BQU1rSCxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsUUFBTUMsT0FBTyxHQUFHdkIsMERBQWdCLENBQUN2RSx3QkFBakIsRUFBaEI7O0FBQ0EsUUFBSThGLE9BQU8sQ0FBQ3JHLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJxRyxhQUFPLENBQUNySixPQUFSLENBQWdCLFVBQUN1QyxNQUFELEVBQVk7QUFDMUJBLGNBQU0sQ0FBQ3VFLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDckNwQiw4QkFBb0IsQ0FBQ25ELE1BQUQsQ0FBcEI7QUFDQXVGLG9FQUFnQixDQUFDWCxZQUFqQjtBQUNELFNBSEQ7QUFJRCxPQUxEO0FBTUQ7QUFDRixHQVZEOztBQVlBLE1BQU1tQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsUUFBTXJLLEVBQUUsR0FBR21KLHdEQUFjLENBQUNTLGlCQUFmLEVBQVg7QUFDQWYsOERBQWdCLENBQUN4RixVQUFqQixDQUE0QjtBQUFFckQsUUFBRSxFQUFGQTtBQUFGLEtBQTVCO0FBQ0FtSiw0REFBYyxDQUFDOUYsVUFBZixDQUEwQnJELEVBQTFCO0FBQ0E2SSw4REFBZ0IsQ0FBQ1gsWUFBakI7QUFDRCxHQUxEOztBQU9BLE1BQU1vQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNoSCxNQUFELEVBQVk7QUFDakMsUUFBTXRELEVBQUUsR0FBRzZJLDBEQUFnQixDQUFDeEYsVUFBakIsQ0FBNEI7QUFBRUMsWUFBTSxFQUFOQTtBQUFGLEtBQTVCLENBQVg7QUFDQTZGLDREQUFjLENBQUM5RixVQUFmLENBQTBCckQsRUFBMUI7QUFDRCxHQUhEOztBQUtBLE1BQU11SyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDcEwsSUFBRCxFQUFVO0FBQzVCLFFBQU1xTCxlQUFlLEdBQUczQiwwREFBZ0IsQ0FBQ3JELGtCQUFqQixDQUFvQ3JHLElBQXBDLENBQXhCO0FBQ0FxTCxtQkFBZSxDQUFDekosT0FBaEIsQ0FBd0IsVUFBQzBKLFNBQUQsRUFBZTtBQUNyQ0EsZUFBUyxDQUFDNUMsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtBQUN4QyxZQUFJMUksSUFBSSxLQUFLLFNBQWIsRUFBd0JrTCxpQkFBaUI7QUFDekMsWUFBSWxMLElBQUksS0FBSyxNQUFiLEVBQXFCbUwsY0FBYyxDQUFDRyxTQUFELENBQWQ7QUFDdEIsT0FIRDtBQUlELEtBTEQ7QUFNRCxHQVJEOztBQVVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNwSCxNQUFELEVBQVk7QUFDM0IsUUFBTXRELEVBQUUsR0FBRzZJLDBEQUFnQixDQUFDckMsVUFBakIsQ0FBNEJsRCxNQUE1QixDQUFYO0FBQ0E2Riw0REFBYyxDQUFDdUIsUUFBZixDQUF3QjFLLEVBQXhCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNMkssU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ3hMLElBQUQsRUFBVTtBQUMxQixRQUFNeUwsVUFBVSxHQUFHL0IsMERBQWdCLENBQUMxRSxnQkFBakIsQ0FBa0NoRixJQUFsQyxDQUFuQjtBQUNBeUwsY0FBVSxDQUFDN0osT0FBWCxDQUFtQixVQUFDOEosT0FBRCxFQUFhO0FBQzlCQSxhQUFPLENBQUNoRCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3RDNkMsZ0JBQVEsQ0FBQ0csT0FBRCxDQUFSO0FBQ0QsT0FGRDtBQUdELEtBSkQ7QUFLRCxHQVBEOztBQVNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTTlLLEVBQUUsR0FBR21KLHdEQUFjLENBQUNTLGlCQUFmLEVBQVg7QUFDQSxXQUFPZiwwREFBZ0IsQ0FBQ3hDLGNBQWpCLENBQWdDO0FBQUVyRyxRQUFFLEVBQUZBO0FBQUYsS0FBaEMsQ0FBUDtBQUNELEdBSEQ7O0FBS0EsTUFBTStLLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUF6SCxNQUFNO0FBQUEsV0FBSXVGLDBEQUFnQixDQUFDeEMsY0FBakIsQ0FBZ0M7QUFBRS9DLFlBQU0sRUFBTkE7QUFBRixLQUFoQyxDQUFKO0FBQUEsR0FBdkI7O0FBRUEsTUFBTTBILFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUMxTCxJQUFELEVBQU9nRSxNQUFQLEVBQWtCO0FBQ2pDdUYsOERBQWdCLENBQUMvQyxjQUFqQixDQUFnQ3hDLE1BQWhDOztBQURpQyxlQUVQaEUsSUFBSSxLQUFLLFNBQVYsR0FBdUJ3TCxXQUFXLEVBQWxDLEdBQXVDQyxRQUFRLENBQUN6SCxNQUFELENBRnZDO0FBQUEsUUFFekJpRCxNQUZ5QixRQUV6QkEsTUFGeUI7QUFBQSxRQUVqQnRELElBRmlCLFFBRWpCQSxJQUZpQjs7QUFHakMsUUFBSXNELE1BQU0sS0FBSyxRQUFmLEVBQXlCO0FBQ3ZCaUQsZ0JBQVUsQ0FBQ2xLLElBQUQsRUFBTzJELElBQVAsQ0FBVjtBQUNELEtBRkQsTUFFTztBQUNMK0cseUJBQW1CLENBQUMvRyxJQUFELEVBQU8zRCxJQUFQLENBQW5CO0FBQ0F1SixnRUFBZ0IsQ0FBQ2IsUUFBakIsQ0FBMEIvRSxJQUExQjtBQUNEO0FBQ0YsR0FURDs7QUFXQSxNQUFNZ0ksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQzNMLElBQUQsRUFBVTtBQUMxQixRQUFNNEwsVUFBVSxHQUFHckMsMERBQWdCLENBQUNsRixnQkFBakIsQ0FBa0NyRSxJQUFsQyxDQUFuQjtBQUNBNEwsY0FBVSxDQUFDbkssT0FBWCxDQUFtQixVQUFDb0ssR0FBRCxFQUFTO0FBQzFCQSxTQUFHLENBQUN0RCxnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO0FBQUVtRCxnQkFBUSxDQUFDMUwsSUFBRCxFQUFPNkwsR0FBUCxDQUFSO0FBQXNCLE9BQTVEO0FBQ0QsS0FGRDtBQUdELEdBTEQ7O0FBT0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLFFBQU1DLFFBQVEsR0FBR3hDLDBEQUFnQixDQUFDcEQsY0FBakIsRUFBakI7QUFDQSxRQUFJNkYsR0FBRyxHQUFHLENBQVY7QUFDQUQsWUFBUSxDQUFDeEQsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBTTtBQUN2Q3lELFNBQUcsSUFBSSxDQUFQO0FBQ0EsVUFBSUEsR0FBRyxHQUFHLENBQVYsRUFBYSxPQUYwQixDQUVsQjs7QUFDckJuQyw4REFBYyxDQUFDb0MsWUFBZjtBQUNBMUMsZ0VBQWdCLENBQUNYLFlBQWpCO0FBQ0QsS0FMRDtBQU1ELEdBVEQ7O0FBV0EsTUFBTXNELGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQzFHLElBQUQsRUFBTzdCLElBQVAsRUFBZ0I7QUFDcEM2QixRQUFJLENBQUMrQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO0FBQ25DZ0IsZ0VBQWdCLENBQUMvQyxjQUFqQixDQUFnQ2hCLElBQWhDO0FBQ0ErRCxnRUFBZ0IsQ0FBQ2xELGFBQWpCLENBQStCMUMsSUFBL0I7QUFDQTRGLGdFQUFnQixDQUFDYixRQUFqQixDQUEwQi9FLElBQTFCO0FBQ0QsS0FKRDtBQUtELEdBTkQ7O0FBUUEsTUFBTXdJLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUN0TSxJQUFELEVBQVU7QUFBQSxnQ0FDTjBKLDBEQUFnQixDQUFDakUsYUFBakIsQ0FBK0J6RixJQUEvQixDQURNO0FBQUEsUUFDckIyRixJQURxQix5QkFDckJBLElBRHFCO0FBQUEsUUFDZjdCLElBRGUseUJBQ2ZBLElBRGU7O0FBRTdCdUksaUJBQWEsQ0FBQzFHLElBQUQsRUFBTzdCLElBQVAsQ0FBYjtBQUNBK0csdUJBQW1CLENBQUMvRyxJQUFELEVBQU85RCxJQUFQLENBQW5CO0FBQ0E4TCxhQUFTLENBQUM5TCxJQUFELENBQVQ7QUFDQW9MLGVBQVcsQ0FBQ3BMLElBQUQsQ0FBWDs7QUFDQSxRQUFJQSxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQndMLGVBQVMsQ0FBQ3hMLElBQUQsQ0FBVDtBQUNEOztBQUNELFFBQUlBLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQ3RCZ0wsd0JBQWtCO0FBQ2xCaUIsdUJBQWlCO0FBQ2xCO0FBQ0YsR0FiRDs7QUFlQSxNQUFNTSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCdkMsNERBQWMsQ0FBQ3dDLE9BQWY7QUFDQTlDLDhEQUFnQixDQUFDbEosTUFBakI7QUFDQWtKLDhEQUFnQixDQUFDRCxjQUFqQjtBQUNBTSxrQkFBYztBQUNkWSw0QkFBd0I7QUFDekIsR0FORDs7QUFRQSxNQUFNOEIsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQkYsUUFBSTtBQUNKLEtBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0IzSyxPQUFwQixDQUE0QixVQUFBNUIsSUFBSTtBQUFBLGFBQUlzTSxZQUFZLENBQUN0TSxJQUFELENBQWhCO0FBQUEsS0FBaEM7QUFDRCxHQUhEOztBQUtBLFNBQU87QUFBRXlNLFNBQUssRUFBTEE7QUFBRixHQUFQO0FBQ0QsQ0FoTHFCLEVBQXRCOztBQWtMQTNDLGFBQWEsQ0FBQzJDLEtBQWQsRzs7Ozs7Ozs7Ozs7O0FDckxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTXpDLGNBQWMsR0FBSSxZQUFNO0FBQzVCLE1BQU1RLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQTNHLElBQUk7QUFBQSxXQUFJekMsa0VBQWEsQ0FBQ29KLGNBQWQsQ0FBNkIzRyxJQUE3QixDQUFKO0FBQUEsR0FBM0I7O0FBQ0EsTUFBTTZHLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUE3RyxJQUFJO0FBQUEsV0FBSS9CLCtEQUFVLENBQUM0SSxXQUFYLENBQXVCN0csSUFBdkIsQ0FBSjtBQUFBLEdBQXhCOztBQUNBLE1BQU1zRyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUF0SixFQUFFO0FBQUEsV0FBSWlCLCtEQUFVLENBQUM0SyxxQkFBWCxDQUFpQzdMLEVBQWpDLENBQUo7QUFBQSxHQUFuQzs7QUFFQSxNQUFNNEosaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFdBQU1rQywwREFBUyxDQUFDbEMsaUJBQVYsRUFBTjtBQUFBLEdBQTFCOztBQUNBLE1BQU14RixjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsV0FBTTBILDBEQUFTLENBQUMxSCxjQUFWLEVBQU47QUFBQSxHQUF2Qjs7QUFDQSxNQUFNaUYscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QjtBQUFBLFdBQU15QywwREFBUyxDQUFDekMscUJBQVYsRUFBTjtBQUFBLEdBQTlCOztBQUVBLE1BQU1oRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBckQsRUFBRTtBQUFBLFdBQUkrTCw0REFBVyxDQUFDMUksVUFBWixDQUF1QnJELEVBQXZCLENBQUo7QUFBQSxHQUFyQjs7QUFDQSxNQUFNdUwsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxXQUFNUyx1REFBTyxDQUFDVCxZQUFSLEVBQU47QUFBQSxHQUFyQjs7QUFFQSxNQUFNOUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQXpHLElBQUk7QUFBQSxXQUFJaUosNERBQVcsQ0FBQ3hDLFVBQVosQ0FBdUJ6RyxJQUF2QixDQUFKO0FBQUEsR0FBdkI7O0FBQ0EsTUFBTTBILFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUExSyxFQUFFO0FBQUEsV0FBSWlNLDREQUFXLENBQUN2QixRQUFaLENBQXFCMUssRUFBckIsQ0FBSjtBQUFBLEdBQW5COztBQUNBLE1BQU0wSixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBNUMsR0FBRztBQUFBLFdBQUltRiw0REFBVyxDQUFDdkMsVUFBWixDQUF1QjVDLEdBQXZCLENBQUo7QUFBQSxHQUF0Qjs7QUFFQSxNQUFNNkUsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxXQUFNTywrREFBVSxDQUFDUCxPQUFYLEVBQU47QUFBQSxHQUFoQjs7QUFFQSxTQUFPO0FBQ0xBLFdBQU8sRUFBUEEsT0FESztBQUVMaEMsa0JBQWMsRUFBZEEsY0FGSztBQUdMRSxlQUFXLEVBQVhBLFdBSEs7QUFJTEQscUJBQWlCLEVBQWpCQSxpQkFKSztBQUtMMkIsZ0JBQVksRUFBWkEsWUFMSztBQU1Mbkgsa0JBQWMsRUFBZEEsY0FOSztBQU9MaUYseUJBQXFCLEVBQXJCQSxxQkFQSztBQVFMQyw0QkFBd0IsRUFBeEJBLHdCQVJLO0FBU0xqRyxjQUFVLEVBQVZBLFVBVEs7QUFVTG9HLGNBQVUsRUFBVkEsVUFWSztBQVdMaUIsWUFBUSxFQUFSQSxRQVhLO0FBWUxoQixjQUFVLEVBQVZBO0FBWkssR0FBUDtBQWNELENBaENzQixFQUF2Qjs7QUFrQ2VQLDZFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLElBQU1nRCxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDN00sSUFBRCxFQUFVO0FBQ3pCLE1BQU0wRCxJQUFJLEdBQUcsRUFBYjtBQUNBLE1BQUloRCxFQUFKOztBQUNBLE1BQUlnTSxnREFBTyxDQUFDSSxzQkFBUixDQUErQixLQUEvQixLQUF5Q0osZ0RBQU8sQ0FBQ0ksc0JBQVIsQ0FBK0IsS0FBL0IsWUFBeUM5TSxJQUF6QyxZQUE3QyxFQUFxRztBQUNuR1UsTUFBRSxHQUFHZ00sZ0RBQU8sQ0FBQ0ksc0JBQVIsQ0FBK0IsS0FBL0IsWUFBeUM5TSxJQUF6QyxZQUFMO0FBQ0EsUUFBTStNLFNBQVMsR0FBR0MsTUFBTSxDQUFDdE0sRUFBRSxDQUFDOEQsS0FBSCxDQUFTLEdBQVQsRUFBYyxDQUFkLENBQUQsQ0FBTixHQUEyQixDQUE3QztBQUNBOUQsTUFBRSxhQUFNVixJQUFOLGNBQWMrTSxTQUFkLENBQUY7QUFDRCxHQUpELE1BSU87QUFDTHJNLE1BQUUsYUFBTVYsSUFBTixPQUFGO0FBQ0Q7O0FBQ0QwRCxNQUFJLFdBQUkxRCxJQUFKLFlBQUosR0FBd0JVLEVBQXhCO0FBQ0FnRCxNQUFJLFdBQUkxRCxJQUFKLGVBQUosR0FBMkJVLEVBQTNCO0FBQ0FnTSxrREFBTyxDQUFDTyx1QkFBUixDQUFnQztBQUFFak4sUUFBSSxFQUFFLEtBQVI7QUFBZTBELFFBQUksRUFBSkE7QUFBZixHQUFoQztBQUNBLFNBQU9oRCxFQUFQO0FBQ0QsQ0FkRDs7QUFnQkEsSUFBTU8sYUFBYSxHQUFJLFlBQU07QUFDM0IsTUFBTWlNLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixRQUFNQyxXQUFXLEdBQUdULGdEQUFPLENBQUNJLHNCQUFSLENBQStCLFNBQS9CLENBQXBCOztBQUNBLFFBQUksQ0FBQ0ssV0FBRCxJQUFnQkEsV0FBVyxDQUFDMUksTUFBWixLQUF1QixDQUEzQyxFQUE4QztBQUM1QyxVQUFNMkksY0FBYyxHQUFHLENBQ3JCO0FBQUVqTSxtQkFBVyxFQUFFLGlCQUFmO0FBQWtDVCxVQUFFLEVBQUU7QUFBdEMsT0FEcUIsQ0FBdkI7QUFHQWdNLHNEQUFPLENBQUNXLG9CQUFSLENBQTZCO0FBQUVyTixZQUFJLEVBQUUsU0FBUjtBQUFtQjBELFlBQUksRUFBRTBKO0FBQXpCLE9BQTdCO0FBQ0FWLHNEQUFPLENBQUNPLHVCQUFSLENBQWdDO0FBQzlCak4sWUFBSSxFQUFFLEtBRHdCO0FBRTlCMEQsWUFBSSxFQUFFO0FBQ0o0Six1QkFBYSxFQUFFRixjQUFjLENBQUMsQ0FBRCxDQUFkLENBQWtCMU0sRUFEN0I7QUFFSjZNLDBCQUFnQixFQUFFSCxjQUFjLENBQUMsQ0FBRCxDQUFkLENBQWtCMU07QUFGaEM7QUFGd0IsT0FBaEM7QUFPRDtBQUNGLEdBZkQ7O0FBaUJBLE1BQU0ySixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQXlCO0FBQUEsUUFBdEJsSixXQUFzQixRQUF0QkEsV0FBc0I7QUFBQSxRQUFUVCxFQUFTLFFBQVRBLEVBQVM7QUFDOUMsUUFBTThNLGFBQWEsR0FBRzlNLEVBQUUsSUFBSW1NLFFBQVEsQ0FBQyxTQUFELENBQXBDO0FBQ0FZLG9EQUFPLENBQUNDLFdBQVIsQ0FBb0JySSxJQUFwQixDQUF5QmpFLHdEQUFPLENBQUM7QUFBRUQsaUJBQVcsRUFBWEEsV0FBRjtBQUFlVCxRQUFFLEVBQUU4TTtBQUFuQixLQUFELENBQWhDO0FBQ0FkLG9EQUFPLENBQUNXLG9CQUFSLENBQTZCO0FBQUVyTixVQUFJLEVBQUUsU0FBUjtBQUFtQjBELFVBQUksRUFBRStKLGdEQUFPLENBQUNDO0FBQWpDLEtBQTdCO0FBQ0QsR0FKRDs7QUFNQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsUUFBTUMsR0FBRyxHQUFHbEIsZ0RBQU8sQ0FBQ0ksc0JBQVIsQ0FBK0IsU0FBL0IsQ0FBWjtBQUNBLFFBQUljLEdBQUosRUFBU0gsZ0RBQU8sQ0FBQ0MsV0FBUixHQUFzQkUsR0FBdEI7QUFDVixHQUhEOztBQUtBLFNBQU87QUFDTHZELGtCQUFjLEVBQWRBLGNBREs7QUFDV3NELHNCQUFrQixFQUFsQkEsa0JBRFg7QUFDK0JULHFCQUFpQixFQUFqQkE7QUFEL0IsR0FBUDtBQUdELENBaENxQixFQUF0Qjs7QUFrQ0EsSUFBTXZMLFVBQVUsR0FBSSxZQUFNO0FBQ3hCLE1BQU00SSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDN0csSUFBRCxFQUFVO0FBQzVCLFFBQUksQ0FBQ0EsSUFBSSxDQUFDaEQsRUFBVixFQUFjZ0QsSUFBSSxDQUFDaEQsRUFBTCxHQUFVbU0sUUFBUSxDQUFDLE1BQUQsQ0FBbEI7QUFDZFksb0RBQU8sQ0FBQ0ksUUFBUixDQUFpQnhJLElBQWpCLENBQXNCOUMscURBQUksQ0FBQ21CLElBQUQsQ0FBMUI7QUFDQWdKLG9EQUFPLENBQUNXLG9CQUFSLENBQTZCO0FBQUVyTixVQUFJLEVBQUUsTUFBUjtBQUFnQjBELFVBQUksRUFBRStKLGdEQUFPLENBQUNJO0FBQTlCLEtBQTdCO0FBQ0QsR0FKRDs7QUFNQSxNQUFNRixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsUUFBTUMsR0FBRyxHQUFHbEIsZ0RBQU8sQ0FBQ0ksc0JBQVIsQ0FBK0IsTUFBL0IsQ0FBWjtBQUNBLFFBQUljLEdBQUosRUFBU0gsZ0RBQU8sQ0FBQ0ksUUFBUixHQUFtQkQsR0FBbkI7QUFDVixHQUhEOztBQUtBLE1BQU1yQixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUN2RyxTQUFELEVBQWU7QUFDM0N5SCxvREFBTyxDQUFDSyxrQkFBUixHQUE2QkwsZ0RBQU8sQ0FBQ0ksUUFBUixDQUFpQkUsTUFBakIsQ0FBd0IsVUFBQXJNLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNzRSxTQUFGLEtBQWdCQSxTQUFwQjtBQUFBLEtBQXpCLENBQTdCO0FBQ0EwRyxvREFBTyxDQUFDTyx1QkFBUixDQUFnQztBQUFFak4sVUFBSSxFQUFFLEtBQVI7QUFBZTBELFVBQUksRUFBRTtBQUFFNkosd0JBQWdCLEVBQUV2SDtBQUFwQjtBQUFyQixLQUFoQztBQUNELEdBSEQ7O0FBS0EsU0FBTztBQUNMdUUsZUFBVyxFQUFYQSxXQURLO0FBQ1FnQyx5QkFBcUIsRUFBckJBLHFCQURSO0FBQytCb0Isc0JBQWtCLEVBQWxCQTtBQUQvQixHQUFQO0FBR0QsQ0FwQmtCLEVBQW5COztBQXNCQSxJQUFNZixVQUFVLEdBQUksWUFBTTtBQUN4QixNQUFNUCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCcEwsaUJBQWEsQ0FBQ2lNLGlCQUFkO0FBQ0FqTSxpQkFBYSxDQUFDME0sa0JBQWQ7QUFDQWhNLGNBQVUsQ0FBQ2dNLGtCQUFYO0FBQ0QsR0FKRDs7QUFNQSxTQUFPO0FBQUV0QixXQUFPLEVBQVBBLE9BQUY7QUFBV1EsWUFBUSxFQUFSQTtBQUFYLEdBQVA7QUFDRCxDQVJrQixFQUFuQjs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNSixXQUFXLEdBQUksWUFBTTtBQUN6QixNQUFNekIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDZ0QsTUFBRCxFQUFTdE4sRUFBVCxFQUFnQjtBQUNyQyxRQUFNZ0QsSUFBSSxHQUFHZ0osZ0RBQU8sQ0FBQ0ksc0JBQVIsQ0FBK0IsTUFBL0IsQ0FBYjtBQUNBLFFBQU1tQixPQUFPLEdBQUl2SyxJQUFJLEdBQUdBLElBQUksQ0FBQ3FLLE1BQUwsQ0FBWSxVQUFBck0sQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ3NNLE1BQUQsQ0FBRCxLQUFjdE4sRUFBbEI7QUFBQSxLQUFiLENBQUgsR0FBd0MsRUFBN0Q7QUFDQStNLG9EQUFPLENBQUNJLFFBQVIsR0FBbUJJLE9BQW5CO0FBQ0F2QixvREFBTyxDQUFDVyxvQkFBUixDQUE2QjtBQUFFck4sVUFBSSxFQUFFLE1BQVI7QUFBZ0IwRCxVQUFJLEVBQUV1SztBQUF0QixLQUE3QjtBQUNELEdBTEQ7O0FBT0EsTUFBTWxELGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ2lELE1BQUQsRUFBU3ROLEVBQVQsRUFBZ0I7QUFDeEMsUUFBTWdELElBQUksR0FBR2dKLGdEQUFPLENBQUNJLHNCQUFSLENBQStCLFNBQS9CLENBQWI7QUFDQSxRQUFNbUIsT0FBTyxHQUFJdkssSUFBSSxHQUFHQSxJQUFJLENBQUNxSyxNQUFMLENBQVksVUFBQXJNLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNoQixFQUFGLEtBQVNBLEVBQWI7QUFBQSxLQUFiLENBQUgsR0FBbUMsRUFBeEQ7QUFDQStNLG9EQUFPLENBQUNDLFdBQVIsR0FBc0JPLE9BQXRCO0FBQ0F2QixvREFBTyxDQUFDVyxvQkFBUixDQUE2QjtBQUFFck4sVUFBSSxFQUFFLFNBQVI7QUFBbUIwRCxVQUFJLEVBQUV1SztBQUF6QixLQUE3QjtBQUNBakQsa0JBQWMsQ0FBQyxXQUFELEVBQWN0SyxFQUFkLENBQWQ7QUFDQWdNLG9EQUFPLENBQUN3QixzQkFBUixDQUErQjtBQUFFbE8sVUFBSSxFQUFFLEtBQVI7QUFBZTBELFVBQUksRUFBRTtBQUFFNkosd0JBQWdCLEVBQUU7QUFBcEI7QUFBckIsS0FBL0I7QUFDRCxHQVBEOztBQVNBLE1BQU14SixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDckQsRUFBRCxFQUFRO0FBQ3pCLFFBQU1WLElBQUksR0FBR1UsRUFBRSxDQUFDOEQsS0FBSCxDQUFTLEdBQVQsRUFBYyxDQUFkLENBQWI7QUFDQSxRQUFJeEUsSUFBSSxLQUFLLE1BQWIsRUFBcUJnTCxjQUFjLENBQUMsSUFBRCxFQUFPdEssRUFBUCxDQUFkO0FBQ3JCLFFBQUlWLElBQUksS0FBSyxTQUFiLEVBQXdCK0ssaUJBQWlCLENBQUMsSUFBRCxFQUFPckssRUFBUCxDQUFqQjtBQUN6QixHQUpEOztBQU1BLFNBQU87QUFBRXFELGNBQVUsRUFBVkE7QUFBRixHQUFQO0FBQ0QsQ0F4Qm1CLEVBQXBCOztBQTBCZTBJLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1yTCxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdELFdBQUgsUUFBR0EsV0FBSDtBQUFBLE1BQWdCVCxFQUFoQixRQUFnQkEsRUFBaEI7QUFBQSxTQUEwQjtBQUFFUyxlQUFXLEVBQVhBLFdBQUY7QUFBZVQsTUFBRSxFQUFGQTtBQUFmLEdBQTFCO0FBQUEsQ0FBaEI7O0FBQ0EsSUFBTTZCLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFDWEosS0FEVyxTQUNYQSxLQURXO0FBQUEsTUFDSjZELFNBREksU0FDSkEsU0FESTtBQUFBLE1BQ081RCxJQURQLFNBQ09BLElBRFA7QUFBQSxNQUNhQyxRQURiLFNBQ2FBLFFBRGI7QUFBQSxNQUN1QkMsV0FEdkIsU0FDdUJBLFdBRHZCO0FBQUEsTUFDb0M1QixFQURwQyxTQUNvQ0EsRUFEcEM7QUFBQSx5QkFDd0NtQixJQUR4QztBQUFBLE1BQ3dDQSxJQUR4QywyQkFDK0MsS0FEL0M7QUFBQSxTQUVOO0FBQ0xNLFNBQUssRUFBTEEsS0FESztBQUNFNkQsYUFBUyxFQUFUQSxTQURGO0FBQ2E1RCxRQUFJLEVBQUpBLElBRGI7QUFDbUJDLFlBQVEsRUFBUkEsUUFEbkI7QUFDNkJDLGVBQVcsRUFBWEEsV0FEN0I7QUFDMEM1QixNQUFFLEVBQUZBLEVBRDFDO0FBQzhDbUIsUUFBSSxFQUFKQTtBQUQ5QyxHQUZNO0FBQUEsQ0FBYjs7QUFNQSxJQUFNNEwsT0FBTyxHQUFJLFlBQU07QUFDckIsTUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsTUFBTUcsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsRUFBM0I7QUFDQSxTQUFPO0FBQUVKLGVBQVcsRUFBWEEsV0FBRjtBQUFlRyxZQUFRLEVBQVJBLFFBQWY7QUFBeUJDLHNCQUFrQixFQUFsQkE7QUFBekIsR0FBUDtBQUNELENBTGUsRUFBaEI7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNdEIsU0FBUyxHQUFJLFlBQU07QUFDdkIsTUFBTWxDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixRQUFNNkQsR0FBRyxHQUFHekIsZ0RBQU8sQ0FBQ0ksc0JBQVIsQ0FBK0IsS0FBL0IsQ0FBWjtBQUNBLFFBQUksQ0FBQ3FCLEdBQUwsRUFBVSxPQUFPekosU0FBUDtBQUNWLFdBQU95SixHQUFHLENBQUNaLGdCQUFYO0FBQ0QsR0FKRDs7QUFLQSxNQUFNekksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFdBQU0ySSxnREFBTyxDQUFDQyxXQUFkO0FBQUEsR0FBdkI7O0FBQ0EsTUFBTTNELHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0I7QUFBQSxXQUFNMEQsZ0RBQU8sQ0FBQ0ssa0JBQWQ7QUFBQSxHQUE5Qjs7QUFFQSxTQUFPO0FBQ0x4RCxxQkFBaUIsRUFBakJBLGlCQURLO0FBQ2N4RixrQkFBYyxFQUFkQSxjQURkO0FBQzhCaUYseUJBQXFCLEVBQXJCQTtBQUQ5QixHQUFQO0FBR0QsQ0FaaUIsRUFBbEI7O0FBY2V5Qyx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsSUFBTUUsT0FBTyxHQUFJLFlBQU07QUFDckIsTUFBTVcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixPQUFvQjtBQUFBLFFBQWpCck4sSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsUUFBWDBELElBQVcsUUFBWEEsSUFBVztBQUMvQ21GLFVBQU0sQ0FBQ3VGLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCck8sSUFBNUIsRUFBa0NzTyxJQUFJLENBQUNDLFNBQUwsQ0FBZTdLLElBQWYsQ0FBbEM7QUFDRCxHQUZEOztBQUlBLE1BQU11Six1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLFFBQW9CO0FBQUEsUUFBakJqTixJQUFpQixTQUFqQkEsSUFBaUI7QUFBQSxRQUFYMEQsSUFBVyxTQUFYQSxJQUFXO0FBQ2xELFFBQU04SyxZQUFZLEdBQUc5QixPQUFPLENBQUNJLHNCQUFSLENBQStCOU0sSUFBL0IsQ0FBckI7QUFDQSxRQUFNeU8sTUFBTSxHQUFHRCxZQUFZLElBQUksRUFBL0I7O0FBQ0EsdUNBQXFCRSxNQUFNLENBQUNDLE9BQVAsQ0FBZWpMLElBQWYsQ0FBckIscUNBQTJDO0FBQUE7QUFBQSxVQUEvQmtMLENBQStCO0FBQUEsVUFBNUJDLENBQTRCOztBQUN6Q0osWUFBTSxDQUFDRyxDQUFELENBQU4sR0FBWUMsQ0FBWjtBQUNEOztBQUNEaEcsVUFBTSxDQUFDdUYsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEJyTyxJQUE1QixFQUFrQ3NPLElBQUksQ0FBQ0MsU0FBTCxDQUFlRSxNQUFmLENBQWxDO0FBQ0QsR0FQRDs7QUFTQSxNQUFNM0Isc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDOU0sSUFBRCxFQUFVO0FBQ3ZDLFFBQUk2SSxNQUFNLENBQUN1RixZQUFQLENBQW9CVSxPQUFwQixDQUE0QjlPLElBQTVCLENBQUosRUFBdUM7QUFDckMsYUFBT3NPLElBQUksQ0FBQ1MsS0FBTCxDQUFXbEcsTUFBTSxDQUFDdUYsWUFBUCxDQUFvQlUsT0FBcEIsQ0FBNEI5TyxJQUE1QixDQUFYLENBQVA7QUFDRDs7QUFDRCxXQUFPMEUsU0FBUDtBQUNELEdBTEQ7O0FBT0EsTUFBTXdKLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsUUFBb0I7QUFBQSxRQUFqQmxPLElBQWlCLFNBQWpCQSxJQUFpQjtBQUFBLFFBQVgwRCxJQUFXLFNBQVhBLElBQVc7QUFDakQsUUFBTThLLFlBQVksR0FBRzFCLHNCQUFzQixDQUFDOU0sSUFBRCxDQUEzQztBQUNBLFFBQU15TyxNQUFNLEdBQUdELFlBQVksSUFBSSxFQUEvQjs7QUFDQSxRQUFJQyxNQUFKLEVBQVk7QUFDVkMsWUFBTSxDQUFDTSxJQUFQLENBQVl0TCxJQUFaLEVBQWtCakMsT0FBbEIsQ0FBMEIsVUFBQW9FLEdBQUc7QUFBQSxlQUFJLE9BQU80SSxNQUFNLENBQUM1SSxHQUFELENBQWpCO0FBQUEsT0FBN0I7QUFDRDs7QUFDRGdELFVBQU0sQ0FBQ3VGLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCck8sSUFBNUIsRUFBa0NzTyxJQUFJLENBQUNDLFNBQUwsQ0FBZUUsTUFBZixDQUFsQztBQUNELEdBUEQ7O0FBU0EsTUFBTXhDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJwRCxVQUFNLENBQUN1RixZQUFQLENBQW9CYSxLQUFwQjtBQUNELEdBRkQ7O0FBSUEsU0FBTztBQUNMNUIsd0JBQW9CLEVBQXBCQSxvQkFESztBQUVMSiwyQkFBdUIsRUFBdkJBLHVCQUZLO0FBR0xILDBCQUFzQixFQUF0QkEsc0JBSEs7QUFJTG9CLDBCQUFzQixFQUF0QkEsc0JBSks7QUFLTGpDLGdCQUFZLEVBQVpBO0FBTEssR0FBUDtBQU9ELENBekNlLEVBQWhCOztBQTJDZVMsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLFdBQVcsR0FBSSxZQUFNO0FBQ3pCLE1BQU12QixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDMUssRUFBRCxFQUFRO0FBQ3ZCLFFBQU1WLElBQUksR0FBR1UsRUFBRSxDQUFDOEQsS0FBSCxDQUFTLEdBQVQsRUFBYyxDQUFkLENBQWI7QUFDQSxRQUFNZCxJQUFJLEdBQUdnSixnREFBTyxDQUFDSSxzQkFBUixDQUErQjlNLElBQS9CLENBQWI7QUFDQSxRQUFNd0gsR0FBRyxHQUFHOUQsSUFBSSxDQUFDd0wsSUFBTCxDQUFVLFVBQUF4TixDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDaEIsRUFBRixLQUFTQSxFQUFiO0FBQUEsS0FBWCxDQUFaO0FBQ0EsUUFBSThHLEdBQUosRUFBU0EsR0FBRyxDQUFDM0YsSUFBSixHQUFXLENBQUMyRixHQUFHLENBQUMzRixJQUFoQjtBQUNUNEwsb0RBQU8sV0FBSXpOLElBQUosVUFBUCxHQUF5QjBELElBQXpCO0FBQ0FnSixvREFBTyxDQUFDVyxvQkFBUixDQUE2QjtBQUFFck4sVUFBSSxFQUFKQSxJQUFGO0FBQVEwRCxVQUFJLEVBQUpBO0FBQVIsS0FBN0I7QUFDRCxHQVBEOztBQVNBLE1BQU15RyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFjO0FBQUEsUUFBWHpHLElBQVcsUUFBWEEsSUFBVztBQUMvQixRQUFJLENBQUNBLElBQUksQ0FBQ2hELEVBQVYsRUFBYztBQUNkLFFBQU15TyxLQUFLLEdBQUd6TCxJQUFJLENBQUNoRCxFQUFMLENBQVE4RCxLQUFSLENBQWMsR0FBZCxDQUFkO0FBQ0EsUUFBTXhFLElBQUksR0FBR21QLEtBQUssQ0FBQyxDQUFELENBQWxCOztBQUNBLFFBQUluUCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQjBELFVBQUksQ0FBQ3NDLFNBQUwsR0FBaUJ3RyxtREFBUyxDQUFDbEMsaUJBQVYsRUFBakI7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsTUFBTUYsVUFBVSxHQUFHLFNBQWJBLFVBQWEsUUFBa0I7QUFBQSxRQUFmMUosRUFBZSxTQUFmQSxFQUFlO0FBQUEsUUFBWGdELElBQVcsU0FBWEEsSUFBVztBQUNuQyxRQUFNMUQsSUFBSSxHQUFHVSxFQUFFLENBQUM4RCxLQUFILENBQVMsR0FBVCxFQUFjLENBQWQsQ0FBYjtBQUNBLFFBQU00SyxZQUFZLEdBQUcxQyxnREFBTyxDQUFDSSxzQkFBUixDQUErQjlNLElBQS9CLENBQXJCO0FBQ0EsUUFBTXdILEdBQUcsR0FBRzRILFlBQVksQ0FBQ0YsSUFBYixDQUFrQixVQUFBeE4sQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ2hCLEVBQUYsS0FBU0EsRUFBYjtBQUFBLEtBQW5CLENBQVo7QUFDQTBPLGdCQUFZLENBQUNDLE1BQWIsQ0FBb0JELFlBQVksQ0FBQ0UsT0FBYixDQUFxQjlILEdBQXJCLENBQXBCLEVBQStDLENBQS9DLEVBQWtEOUQsSUFBbEQ7QUFDQStKLG9EQUFPLFdBQUl6TixJQUFKLFVBQVAsR0FBeUJvUCxZQUF6QjtBQUNBMUMsb0RBQU8sQ0FBQ1csb0JBQVIsQ0FBNkI7QUFBRXJOLFVBQUksRUFBSkEsSUFBRjtBQUFRMEQsVUFBSSxFQUFFMEw7QUFBZCxLQUE3QjtBQUNELEdBUEQ7O0FBU0EsU0FBTztBQUFFaEUsWUFBUSxFQUFSQSxRQUFGO0FBQVloQixjQUFVLEVBQVZBLFVBQVo7QUFBd0JELGNBQVUsRUFBVkE7QUFBeEIsR0FBUDtBQUNELENBN0JtQixFQUFwQjs7QUErQmV3QywwRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vY3JlYXRlX2Zvcm0nO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBjb21tb25Vc2FnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldHRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFnID0gdXRpbHMuY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ3NldHRpbmcnIH0pO1xuICAgIHRhZy5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoeyB0YWc6ICdpJywgY2xhc3NlczogJ2VkaXQgZmFzIGZhLWVkaXQgY3Vyc29yLXBvaW50ZXInIH0pKTtcbiAgICB0YWcuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlVGFnKHsgdGFnOiAnaScsIGNsYXNzZXM6ICdkZWxldGUgZmFyIGZhLXRpbWVzLWNpcmNsZSBjdXJzb3ItcG9pbnRlcicgfSkpO1xuICAgIHJldHVybiB0YWc7XG4gIH07XG5cbiAgY29uc3QgaGVhZGVyU2V0ID0gKGhlYWRlciwgd29yZCkgPT4ge1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnaDEnLCBjbGFzc2VzOiAnaC10aXRsZScsIHRleHQ6IHdvcmQsXG4gICAgfSkpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnaDEnLCBjbGFzc2VzOiAnY3JlYXRlLWZvcm0gY3Vyc29yLXBvaW50ZXInLCB0ZXh0OiAnKycsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHNldEdyb3VwID0gKHNvcnQsIGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IGdyb3VwID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2RpdicsIGNsYXNzZXM6IGAke3NvcnR9LWNvbnRlbnQtZ3JvdXBgLFxuICAgIH0pO1xuICAgIGhlYWRlclNldChjb250YWluZXIsIHV0aWxzLmNhcGl0YWxpemUoc29ydCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcblxuICByZXR1cm4geyBzZXR0aW5nLCBzZXRHcm91cCB9O1xufSkoKTtcblxuY29uc3QgY3JlYXRlTGF5b3V0ID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnc2VjdGlvbicsIGlkOiAncHJvamVjdCcsIGNsYXNzZXM6ICdjb2wtbWQtNCBwcmltYXJ5LWJnJyxcbiAgICB9KTtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ3NlY3Rpb24nLCBpZDogJ3RvZG8nLCBjbGFzc2VzOiAnY29sLW1kLTggc2Vjb25kYXJ5LWJnJyxcbiAgICB9KTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeS1iZycpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29tbW9uVXNhZ2Uuc2V0R3JvdXAoJ3Byb2plY3QnLCBwcm9qZWN0Q29udGFpbmVyKSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tb25Vc2FnZS5zZXRHcm91cCgndG9kbycsIHRvZG9Db250YWluZXIpKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvcm0ubWFpbkZvcm0oeyBvcHRpb246ICdwcm9qZWN0JyB9KSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tb25Vc2FnZS5zZXR0aW5nKCkpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybS5tYWluRm9ybSh7IG9wdGlvbjogJ3RvZG8nIH0pKTtcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgfTtcbiAgcmV0dXJuIHsgcmVuZGVyIH07XG59KSgpO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdFVuaXREaXNwbGF5ID0gKHsgcHJvamVjdE5hbWUsIGlkIH0pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2g0JywgaWQsIGNsYXNzZXM6ICdwcm9qZWN0LWNvbnRlbnQgbS0wIGN1cnNvci1wb2ludGVyJyxcbiAgICB9KTtcblxuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBjb25zdCBwcm9qZWN0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50LWdyb3VwJyk7XG4gICAgcHJvamVjdEdyb3VwLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEdyb3VwID0gKHByb2plY3RBcnJheSkgPT4ge1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGUgPT4gcHJvamVjdFVuaXREaXNwbGF5KGUpKTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRHcm91cCB9O1xufSkoKTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRvbmVTdGF0dXNEaXNwbGF5ID0gKHsgZG9uZSwgcGFyZW50IH0pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnaW5wdXQnLCBjbGFzc2VzOiAnZG9uZS1idG4gdmVydGljYWwtYWxpZ24tYm90dG9tIGN1cnNvci1wb2ludGVyJyxcbiAgICB9KTtcbiAgICB0YXJnZXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIHRhcmdldC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgY29uc3QgdG9kb1VuaXREaXNwbGF5ID0gKHtcbiAgICB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBpZCwgZG9uZSxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JywgaWQsIGNsYXNzZXM6IGB0b2RvLWNvbnRlbnQgbm8tZ3V0dGVyICR7cHJpb3JpdHl9YCxcbiAgICB9KTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKGRvbmVTdGF0dXNEaXNwbGF5KHsgZG9uZSwgcGFyZW50OiB0b2RvIH0pKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdoNCcsXG4gICAgICBjbGFzc2VzOiAndGl0bGUgdGV4dC1ub3dyYXAgbS0wJyxcbiAgICAgIHRleHQ6IHRpdGxlLFxuICAgIH0pKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogJ2RhdGUnLFxuICAgICAgdGV4dDogZGF0ZSxcbiAgICB9KSk7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6ICdkZXNjcmlwdGlvbiB0ZXh0LW5vd3JhcCcsXG4gICAgICB0ZXh0OiBkZXNjcmlwdGlvbixcbiAgICB9KSk7XG4gICAgdG9kby5hcHBlbmRDaGlsZChjb21tb25Vc2FnZS5zZXR0aW5nKCkpO1xuICAgIHJldHVybiB0b2RvO1xuICB9O1xuXG4gIGNvbnN0IGFkZEdyb3VwID0gKG5ld0dyb3VwKSA9PiB7XG4gICAgY29uc3QgdG9kb0dyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGVudC1ncm91cCcpO1xuICAgIHdoaWxlICh0b2RvR3JvdXAuZmlyc3RDaGlsZCkge1xuICAgICAgdG9kb0dyb3VwLnJlbW92ZUNoaWxkKHRvZG9Hcm91cC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgbmV3R3JvdXAuZm9yRWFjaChlID0+IHRvZG9Hcm91cC5hcHBlbmRDaGlsZCh0b2RvVW5pdERpc3BsYXkoZSkpKTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRHcm91cCB9O1xufSkoKTtcblxuZXhwb3J0IHsgY3JlYXRlTGF5b3V0LCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUb2RvIH07XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKCkgPT4ge1xuICBjb25zdCBidWlsZEZpZWxkID0gKHtcbiAgICBwbGFjZWhvbGRlciwgdHlwZSwgZGVmYXVsdFZhbHVlLCB0ZXh0YXJlYSxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IHRleHRhcmVhIHx8ICdpbnB1dCc7XG4gICAgY29uc3QgbmFtZSA9IHV0aWxzLmluY2x1ZGVTcGFjZShwbGFjZWhvbGRlcikgPyB1dGlscy5leGNoYW5nZVNwYWNlVG9EYXNoKHBsYWNlaG9sZGVyKVxuICAgICAgOiBwbGFjZWhvbGRlcjtcbiAgICBjb25zdCBmaWVsZCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6IGBmaWVsZCAke25hbWV9YCB9KTtcbiAgICBjb25zdCBpbnB1dCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogaW5wdXRUeXBlLCBpZDogbmFtZSwgY2xhc3NlczogbmFtZSB9KTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgIGlmICh0eXBlKSBpbnB1dC50eXBlID0gdHlwZTtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSBpbnB1dC5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuICBjb25zdCBwcmlvcml0eVVuaXQgPSAod29yZCwgZmllbGQsIGNoZWNrZWQpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdpbnB1dCcsIGlkOiBgcHJpb3JpdHktJHt3b3JkfWAsIGNsYXNzZXM6ICdwcmlvcml0eScsXG4gICAgfSk7XG4gICAgaW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgaWYgKGNoZWNrZWQpIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IGxhYmVsID0gdXRpbHMuY3JlYXRlVGFnKHsgdGFnOiAnbGFiZWwnLCB0ZXh0OiB3b3JkIH0pO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHByaW9yaXR5LSR7d29yZH1gKTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB9O1xuXG4gIGNvbnN0IHByaW9yaXR5RmllbGQgPSAocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBmaWVsZCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdmaWVsZCBwcmlvcml0eScgfSk7XG4gICAgbGV0IGNoZWNrZWQgPSBbdHJ1ZSwgZmFsc2VdO1xuICAgIGlmIChwcmlvcml0eSAmJiBwcmlvcml0eSA9PT0gJ3ByaW9yaXR5LXVyZ2VudCcpIHtcbiAgICAgIGNoZWNrZWQgPSBbZmFsc2UsIHRydWVdO1xuICAgIH1cbiAgICBwcmlvcml0eVVuaXQoJ25vcm1hbCcsIGZpZWxkLCBjaGVja2VkWzBdKTtcbiAgICBwcmlvcml0eVVuaXQoJ3VyZ2VudCcsIGZpZWxkLCBjaGVja2VkWzFdKTtcbiAgICByZXR1cm4gZmllbGQ7XG4gIH07XG5cbiAgY29uc3QgbWFpbkZvcm0gPSAoeyBvcHRpb24sIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZm9ybScsIGNsYXNzZXM6IHV0aWxzLmV4Y2hhbmdlU3BhY2VUb0Rhc2goYCR7b3B0aW9ufSBmb3JtYCksXG4gICAgfSk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICBjb25zdCBmaWVsZHNldCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogJ2ZpZWxkc2V0JyB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcbiAgICBpZiAob3B0aW9uID09PSAncHJvamVjdCcpIHtcbiAgICAgIGlmIChkYXRhKSBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgcGxhY2Vob2xkZXI6ICdwcm9qZWN0IG5hbWUnLCBkZWZhdWx0VmFsdWU6IGRhdGEucHJvamVjdE5hbWUgfSkpO1xuICAgICAgZWxzZSBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgcGxhY2Vob2xkZXI6ICdwcm9qZWN0IG5hbWUnIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYnVpbGRGaWVsZCh7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAndGl0bGUnLCBkZWZhdWx0VmFsdWU6IGRhdGEgPyBkYXRhLnRpdGxlIDogJycsXG4gICAgICB9KSk7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdkYXRlJyxcbiAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRhdGEgPyBkYXRhLmRhdGUgOiB1dGlscy5nZXREYXRlRnJvbVRvZGF5KDApLFxuICAgICAgfSkpO1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlGaWVsZChkYXRhID8gZGF0YS5wcmlvcml0eSA6ICcnKSk7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgIHRleHRhcmVhOiAndGV4dGFyZWEnLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRhdGEgPyBkYXRhLmRlc2NyaXB0aW9uIDogJycsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xuICB9O1xuICByZXR1cm4geyBtYWluRm9ybSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybTtcbiIsImNvbnN0IGRlbGV0ZURpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBkZWxldGVVbml0ID0gKHsgaWQsIGJ1dHRvbiB9KSA9PiB7XG4gICAgY29uc3Qgb2JqZWN0ID0gYnV0dG9uID8gYnV0dG9uLnBhcmVudE5vZGUucGFyZW50Tm9kZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBvYmplY3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvYmplY3QpO1xuICAgIHJldHVybiBvYmplY3QuaWQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGVsZXRlVW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlRGlzcGxheTtcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgcmVhZERpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBnZXRFZGl0QnV0dG9uQWxsID0gKGlkKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHJldHVybiBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcbiAgfTtcblxuICBjb25zdCBjb2xsZWN0Rm9ybUhpZGRlbkRhdGEgPSAoeyBkYXRhLCBmb3JtIH0pID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBmb3JtLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudC5pZC5zcGxpdCgnLScpLmxlbmd0aCAhPT0gMikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBjbGFzc2VzID0gcGFyZW50LmNsYXNzTGlzdC52YWx1ZS5zcGxpdCgnICcpO1xuICAgIGRhdGEuZG9uZSA9IGNsYXNzZXMuaW5jbHVkZXMoJ2RvbmUnKTtcbiAgICBkYXRhLmlkID0gcGFyZW50LmlkO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IGdldERvbmVCdXR0b25BbGwgPSAoaWQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZG9uZS1idG4nKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRlbnQtZ3JvdXAnKS5jaGlsZE5vZGVzO1xuXG4gIGNvbnN0IGdldFByb2plY3RzRXhjZXB0Q3VycmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gW107XG4gICAgY29uc3QgYWxsTGlzdCA9IGdldFByb2plY3RMaXN0KCk7XG4gICAgY29uc3QgbGVuID0gYWxsTGlzdC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IGFsbExpc3RbaV0uY2xhc3NMaXN0LnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICBpZiAoIWNsYXNzZXMuaW5jbHVkZXMoJ2N1cnJlbnQtcHJvamVjdCcpKSB7XG4gICAgICAgIGNvbGxlY3Rpb24ucHVzaChhbGxMaXN0W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH07XG5cbiAgY29uc3QgZ2V0Rm9ybUxheW91dCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGNvbnN0IG9wZW4gPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWZvcm0nKTtcbiAgICBjb25zdCBmb3JtID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIHJldHVybiB7IGZvcm0sIG9wZW4gfTtcbiAgfTtcblxuICBjb25zdCBnZXRSYWRpb0luZm8gPSAoaW5wdXQsIGRhdGEpID0+IHtcbiAgICBjb25zdCByYWRpb3MgPSBpbnB1dC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgcmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBpZiAocmFkaW8uY2hlY2tlZCkge1xuICAgICAgICBkYXRhW3JhZGlvLm5hbWVdID0gcmFkaW8uaWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Rm9ybURhdGEgPSAoZm9ybSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWVsZCcpLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgfHwgZmllbGQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgIGlmIChzZWxlY3Rvci50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIGdldFJhZGlvSW5mbyhzZWxlY3RvciwgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBrZXkgPSB1dGlscy5leGNoYW5nZURhc2hUb0NhcGl0YWwoc2VsZWN0b3IubmFtZSk7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHNlbGVjdG9yO1xuICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50T3JMYXN0UHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBpZiAocHJvamVjdElkKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdElkfWApO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudC1ncm91cCcpLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRlbnQtZ3JvdXAnKS5sYXN0Q2hpbGQ7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGVsZXRlQnV0dG9uQWxsID0gKGlkKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHJldHVybiBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xuICB9O1xuXG4gIGNvbnN0IGdldFJlc2V0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvJyk7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuaC10aXRsZScpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0RWRpdEJ1dHRvbkFsbCxcbiAgICBjb2xsZWN0Rm9ybUhpZGRlbkRhdGEsXG4gICAgZ2V0RG9uZUJ1dHRvbkFsbCxcbiAgICBnZXRQcm9qZWN0TGlzdCxcbiAgICBnZXRQcm9qZWN0c0V4Y2VwdEN1cnJlbnQsXG4gICAgZ2V0Rm9ybUxheW91dCxcbiAgICBnZXRGb3JtRGF0YSxcbiAgICBjdXJyZW50T3JMYXN0UHJvamVjdCxcbiAgICBnZXREZWxldGVCdXR0b25BbGwsXG4gICAgZ2V0UmVzZXRCdXR0b24sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCByZWFkRGlzcGxheTtcbiIsImltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vY3JlYXRlX2Zvcm0nO1xuaW1wb3J0IHJlYWREaXNwbGF5IGZyb20gJy4vcmVhZF9kaXNwbGF5JztcblxuY29uc3QgdXBkYXRlRGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZU5ld0Zvcm0gPSAoZm9ybSkgPT4ge1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQ3Vyc29yUG9pbnRlciA9IChidXR0b24pID0+IHtcbiAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY3Vyc29yLXBvaW50ZXInKTtcbiAgfTtcblxuICBjb25zdCBvdGhlckJ1dHRvbk9mZiA9IChidXR0b24pID0+IHtcbiAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3Vyc29yLXBvaW50ZXInKTtcbiAgICBhbGwuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgaWYgKGUgIT09IGJ1dHRvbikgZS5jbGFzc0xpc3QudG9nZ2xlKCdwb2ludGVyLWV2ZW50cy1ub25lJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2hpZnRGb3JtRGF0YSA9ICh7IHNvcnQsIG9iamVjdCB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IG9iamVjdC5jbGFzc0xpc3QudmFsdWUuc3BsaXQoJyAnKTtcbiAgICBpZiAoc29ydCA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICBkYXRhLnByb2plY3ROYW1lID0gb2JqZWN0LmlubmVyVGV4dDtcbiAgICAgIG9iamVjdC5pbm5lclRleHQgPSAnJztcbiAgICB9XG4gICAgaWYgKHNvcnQgPT09ICd0b2RvJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gb2JqZWN0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgIGNvbnN0IGluZGljYXRvciA9IHRhcmdldC5jbGFzc0xpc3RbMF07XG4gICAgICAgIGNvbnN0IHRleHQgPSB0YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgICBkYXRhW2luZGljYXRvcl0gPSB0ZXh0O1xuICAgICAgICB0YXJnZXQuaW5uZXJUZXh0ID0gJyc7XG4gICAgICB9XG4gICAgICBvYmplY3QuZmlyc3RDaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBpZiAoc29ydCA9PT0gJ3RvZG8nKSBkYXRhLnByaW9yaXR5ID0gY2xhc3NMaXN0LmluY2x1ZGVzKCdwcmlvcml0eS11cmdlbnQnKSA/ICdwcmlvcml0eS11cmdlbnQnIDogJ3ByaW9yaXR5LW5vcm1hbCc7XG4gICAgcmV0dXJuIHsgZGF0YSB9O1xuICB9O1xuXG4gIGNvbnN0IG9wZW5Gb3JtVG9FZGl0ID0gKHsgaWQsIGJ1dHRvbiB9KSA9PiB7XG4gICAgY29uc3Qgb2JqZWN0ID0gYnV0dG9uID8gYnV0dG9uLnBhcmVudE5vZGUucGFyZW50Tm9kZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBjb25zdCBzb3J0ID0gb2JqZWN0LmlkLnNwbGl0KCctJylbMF07XG4gICAgY29uc3Qgb3BlbmVkRm9ybSA9IG9iamVjdC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgaWYgKG9wZW5lZEZvcm0pIHtcbiAgICAgIHJldHVybiB7IHN0YXR1czogJ29wZW5lZCcsIGZvcm06IG9wZW5lZEZvcm0gfTtcbiAgICB9XG4gICAgY29uc3QgeyBkYXRhIH0gPSBzaGlmdEZvcm1EYXRhKHsgc29ydCwgb2JqZWN0IH0pO1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVGb3JtLm1haW5Gb3JtKHsgb3B0aW9uOiBzb3J0LCBkYXRhIH0pO1xuICAgIG9iamVjdC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICB0b2dnbGVOZXdGb3JtKGZvcm0pO1xuICAgIHJldHVybiB7IHN0YXR1czogJ25vcm1hbCcsIGZvcm0gfTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVEb25lID0gKGJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IG9iamVjdCA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgIG9iamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJyk7XG4gICAgcmV0dXJuIG9iamVjdC5pZDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVDdXJyZW50UHJvamVjdCA9IChuZXdUYWcpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50LWdyb3VwJyk7XG4gICAgY29uc3QgcHJldmlvdXMgPSBwcm9qZWN0R3JvdXAucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcHJvamVjdCcpO1xuICAgIGlmIChwcmV2aW91cykgcHJldmlvdXMuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgbmV3VGFnLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcHJvamVjdCcpO1xuICAgIHJldHVybiBuZXdUYWcuaWQ7XG4gIH07XG5cbiAgY29uc3QgbWFrZUJsYW5rRm9ybSA9IChmb3JtKSA9PiB7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZmllbGQnKS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIHx8IGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgICBzZWxlY3Rvci52YWx1ZSA9ICcnO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdG9nZ2xlRG9uZSxcbiAgICB0b2dnbGVDdXJzb3JQb2ludGVyLFxuICAgIHRvZ2dsZU5ld0Zvcm0sXG4gICAgb3BlbkZvcm1Ub0VkaXQsXG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QsXG4gICAgbWFrZUJsYW5rRm9ybSxcbiAgICBvdGhlckJ1dHRvbk9mZixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZURpc3BsYXk7XG4iLCJjb25zdCB1dGlscyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVRhZyA9ICh7XG4gICAgdGFnLCBpZCwgY2xhc3NlcywgdGV4dCxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoaWQpIG9iai5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGlmIChjbGFzc2VzKSBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChlbGVtID0+IG9iai5jbGFzc0xpc3QuYWRkKGVsZW0pKTtcbiAgICBpZiAodGV4dCkgb2JqLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIGNvbnN0IGdldERhdGVGcm9tVG9kYXkgPSAoYWRkRGF0ZSkgPT4ge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhZGREYXRlKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBtbSA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvLyBKYW51YXJ5IGlzIDAhXG4gICAgY29uc3QgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBkYXRlID0gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xuICAgIHJldHVybiBkYXRlO1xuICB9O1xuXG4gIGNvbnN0IHJlc2l6ZVRleHRhcmVhID0gKCkgPT4ge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IGAkezIwICsgdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmb2N1c1NldCA9ICh0YXJnZXQpID0+IHtcbiAgICBpZiAodGFyZ2V0KSB0YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xuICB9O1xuXG4gIGNvbnN0IHJlbG9hZFNjcmVlbiA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICBjb25zdCBlbGltaW5hdGVGaXJzdE9mRGFzaCA9IHdvcmRzID0+IHdvcmRzLnNwbGl0KCctJylbMV07XG5cbiAgY29uc3QgY2FwaXRhbGl6ZSA9IHdvcmQgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSk7XG5cbiAgY29uc3QgZXhjaGFuZ2VEYXNoVG9DYXBpdGFsID0gKHdvcmQpID0+IHtcbiAgICBjb25zdCB3b3JkcyA9IHdvcmQuc3BsaXQoJy0nKTtcbiAgICBpZiAod29yZHMubGVuZ3RoID4gMSkge1xuICAgICAgd29yZHNbMV0gPSBjYXBpdGFsaXplKHdvcmRzWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRzLmpvaW4oJycpO1xuICB9O1xuXG4gIGNvbnN0IGV4Y2hhbmdlU3BhY2VUb0Rhc2ggPSB3b3JkID0+IHdvcmQuc3BsaXQoJyAnKS5qb2luKCctJyk7XG5cbiAgY29uc3QgaW5jbHVkZVNwYWNlID0gd29yZCA9PiB3b3JkLnNwbGl0KCcgJykubGVuZ3RoID4gMTtcblxuICBjb25zdCBkeW5hbWljU2V0dGluZyA9ICgpID0+IHtcbiAgICByZXNpemVUZXh0YXJlYSgpO1xuICAgIGZvY3VzU2V0KCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUYWcsXG4gICAgZ2V0RGF0ZUZyb21Ub2RheSxcbiAgICBlbGltaW5hdGVGaXJzdE9mRGFzaCxcbiAgICBleGNoYW5nZURhc2hUb0NhcGl0YWwsXG4gICAgZXhjaGFuZ2VTcGFjZVRvRGFzaCxcbiAgICBpbmNsdWRlU3BhY2UsXG4gICAgcmVzaXplVGV4dGFyZWEsXG4gICAgZm9jdXNTZXQsXG4gICAgcmVsb2FkU2NyZWVuLFxuICAgIGR5bmFtaWNTZXR0aW5nLFxuICAgIGNhcGl0YWxpemUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcbiIsImltcG9ydCB7IGNyZWF0ZUxheW91dCwgY3JlYXRlUHJvamVjdCwgY3JlYXRlVG9kbyB9IGZyb20gJy4vZGlzcGxheS9jcmVhdGVfZGlzcGxheSc7XG5pbXBvcnQgcmVhZERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5L3JlYWRfZGlzcGxheSc7XG5pbXBvcnQgdXBkYXRlRGlzcGxheSBmcm9tICcuL2Rpc3BsYXkvdXBkYXRlX2Rpc3BsYXknO1xuaW1wb3J0IGRlbGV0ZURpc3BsYXkgZnJvbSAnLi9kaXNwbGF5L2RlbGV0ZV9kaXNwbGF5JztcbmltcG9ydCB1dGlscyBmcm9tICcuL2Rpc3BsYXkvdXRpbHMnO1xuXG5jb25zdCBkaXNwbGF5SW50ZXJmYWNlID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEdyb3VwID0gcHJvamVjdEFycmF5ID0+IGNyZWF0ZVByb2plY3QuYWRkR3JvdXAocHJvamVjdEFycmF5KTtcbiAgY29uc3QgYWRkVG9kb0dyb3VwID0gdG9kb0FycmF5ID0+IGNyZWF0ZVRvZG8uYWRkR3JvdXAodG9kb0FycmF5KTtcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4gY3JlYXRlTGF5b3V0LnJlbmRlcigpO1xuXG4gIGNvbnN0IGdldEZvcm1MYXlvdXQgPSBpZCA9PiByZWFkRGlzcGxheS5nZXRGb3JtTGF5b3V0KGlkKTtcbiAgY29uc3QgZ2V0Rm9ybURhdGEgPSAoZm9ybSwgcHJvamVjdElkKSA9PiByZWFkRGlzcGxheS5nZXRGb3JtRGF0YShmb3JtLCBwcm9qZWN0SWQpO1xuICBjb25zdCBtYWtlQmxhbmtGb3JtID0gZm9ybSA9PiB1cGRhdGVEaXNwbGF5Lm1ha2VCbGFua0Zvcm0oZm9ybSk7XG5cbiAgY29uc3Qgb3RoZXJCdXR0b25PZmYgPSBidXR0b24gPT4gdXBkYXRlRGlzcGxheS5vdGhlckJ1dHRvbk9mZihidXR0b24pO1xuICBjb25zdCBnZXREZWxldGVCdXR0b25BbGwgPSBpZCA9PiByZWFkRGlzcGxheS5nZXREZWxldGVCdXR0b25BbGwoaWQpO1xuICBjb25zdCBkZWxldGVVbml0ID0gb2JqID0+IGRlbGV0ZURpc3BsYXkuZGVsZXRlVW5pdChvYmopO1xuICBjb25zdCBnZXRSZXNldEJ1dHRvbiA9ICgpID0+IHJlYWREaXNwbGF5LmdldFJlc2V0QnV0dG9uKCk7XG5cbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB1cGRhdGVEaXNwbGF5LmdldFByb2plY3RMaXN0KCk7XG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRQcm9qZWN0ID0gbmV3VGFnID0+IHVwZGF0ZURpc3BsYXkudXBkYXRlQ3VycmVudFByb2plY3QobmV3VGFnKTtcbiAgY29uc3QgY3VycmVudE9yTGFzdFByb2plY3QgPSBwcm9qZWN0SWQgPT4gcmVhZERpc3BsYXkuY3VycmVudE9yTGFzdFByb2plY3QocHJvamVjdElkKTtcbiAgY29uc3QgdG9nZ2xlTmV3Rm9ybSA9IGZvcm0gPT4gdXBkYXRlRGlzcGxheS50b2dnbGVOZXdGb3JtKGZvcm0pO1xuICBjb25zdCB0b2dnbGVDdXJzb3JQb2ludGVyID0gYnV0dG9uID0+IHVwZGF0ZURpc3BsYXkudG9nZ2xlQ3Vyc29yUG9pbnRlcihidXR0b24pO1xuXG4gIGNvbnN0IGdldERvbmVCdXR0b25BbGwgPSBpZCA9PiByZWFkRGlzcGxheS5nZXREb25lQnV0dG9uQWxsKGlkKTtcbiAgY29uc3QgdG9nZ2xlRG9uZSA9IGJ1dHRvbiA9PiB1cGRhdGVEaXNwbGF5LnRvZ2dsZURvbmUoYnV0dG9uKTtcbiAgY29uc3QgZ2V0RWRpdEJ1dHRvbkFsbCA9IGlkID0+IHJlYWREaXNwbGF5LmdldEVkaXRCdXR0b25BbGwoaWQpO1xuICBjb25zdCBvcGVuRm9ybVRvRWRpdCA9IG9iaiA9PiB1cGRhdGVEaXNwbGF5Lm9wZW5Gb3JtVG9FZGl0KG9iaik7XG4gIGNvbnN0IGNvbGxlY3RGb3JtSGlkZGVuRGF0YSA9IG9iaiA9PiByZWFkRGlzcGxheS5jb2xsZWN0Rm9ybUhpZGRlbkRhdGEob2JqKTtcbiAgY29uc3QgZ2V0UHJvamVjdHNFeGNlcHRDdXJyZW50ID0gKCkgPT4gcmVhZERpc3BsYXkuZ2V0UHJvamVjdHNFeGNlcHRDdXJyZW50KCk7XG5cbiAgY29uc3QgZm9jdXNTZXQgPSB0YXJnZXQgPT4gdXRpbHMuZm9jdXNTZXQodGFyZ2V0KTtcbiAgY29uc3QgcmVsb2FkU2NyZWVuID0gKCkgPT4gdXRpbHMucmVsb2FkU2NyZWVuKCk7XG4gIGNvbnN0IGR5bmFtaWNTZXR0aW5nID0gKCkgPT4gdXRpbHMuZHluYW1pY1NldHRpbmcoKTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgICBhZGRUb2RvR3JvdXAsXG4gICAgYWRkUHJvamVjdEdyb3VwLFxuICAgIGdldEZvcm1MYXlvdXQsXG4gICAgZ2V0Rm9ybURhdGEsXG4gICAgbWFrZUJsYW5rRm9ybSxcbiAgICBvdGhlckJ1dHRvbk9mZixcbiAgICBnZXREZWxldGVCdXR0b25BbGwsXG4gICAgZGVsZXRlVW5pdCxcbiAgICBnZXRSZXNldEJ1dHRvbixcbiAgICBnZXRQcm9qZWN0TGlzdCxcbiAgICB1cGRhdGVDdXJyZW50UHJvamVjdCxcbiAgICBjdXJyZW50T3JMYXN0UHJvamVjdCxcbiAgICBnZXREb25lQnV0dG9uQWxsLFxuICAgIHRvZ2dsZURvbmUsXG4gICAgdG9nZ2xlTmV3Rm9ybSxcbiAgICB0b2dnbGVDdXJzb3JQb2ludGVyLFxuICAgIGdldEVkaXRCdXR0b25BbGwsXG4gICAgb3BlbkZvcm1Ub0VkaXQsXG4gICAgY29sbGVjdEZvcm1IaWRkZW5EYXRhLFxuICAgIGZvY3VzU2V0LFxuICAgIHJlbG9hZFNjcmVlbixcbiAgICBnZXRQcm9qZWN0c0V4Y2VwdEN1cnJlbnQsXG4gICAgZHluYW1pY1NldHRpbmcsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SW50ZXJmYWNlO1xuIiwiaW1wb3J0IGRpc3BsYXlJbnRlcmZhY2UgZnJvbSAnLi9kaXNwbGF5X2ludGVyZmFjZSc7XG5pbXBvcnQgbG9naWNJbnRlcmZhY2UgZnJvbSAnLi9sb2dpY19pbnRlcmZhY2UnO1xuXG5jb25zdCBpbnRlcmZhY2VNYWluID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdFNldHRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gbG9naWNJbnRlcmZhY2UuZ2V0UHJvamVjdExpc3QoKTtcbiAgICBkaXNwbGF5SW50ZXJmYWNlLmFkZFByb2plY3RHcm91cChwcm9qZWN0QXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IHRvZG9TZXR0aW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9BcnJheSA9IGxvZ2ljSW50ZXJmYWNlLmdldFRvZG9MaXN0Rm9yUHJvamVjdCgpO1xuICAgIGRpc3BsYXlJbnRlcmZhY2UuYWRkVG9kb0dyb3VwKHRvZG9BcnJheSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQ3VycmVudFByb2plY3QgPSAoYnV0dG9uKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gZGlzcGxheUludGVyZmFjZS51cGRhdGVDdXJyZW50UHJvamVjdChidXR0b24pO1xuICAgIGxvZ2ljSW50ZXJmYWNlLnVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdChwcm9qZWN0SWQpO1xuICAgIGRpc3BsYXlJbnRlcmZhY2UudG9nZ2xlQ3Vyc29yUG9pbnRlcihidXR0b24pO1xuICAgIHRvZG9TZXR0aW5nKCk7XG4gIH07XG5cbiAgY29uc3QgYWZ0ZXJTdWJtaXNzaW9uID0gKGZvcm0pID0+IHtcbiAgICBkaXNwbGF5SW50ZXJmYWNlLm1ha2VCbGFua0Zvcm0oZm9ybSk7XG4gICAgZGlzcGxheUludGVyZmFjZS5yZWxvYWRTY3JlZW4oKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRGb3JtID0gKHNvcnQsIGZvcm0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gZGlzcGxheUludGVyZmFjZS5nZXRGb3JtRGF0YShmb3JtKTtcbiAgICBpZiAoZGlzcGxheUludGVyZmFjZS5jb2xsZWN0Rm9ybUhpZGRlbkRhdGEoeyBkYXRhLCBmb3JtIH0pKSB7XG4gICAgICBsb2dpY0ludGVyZmFjZS5maWxsSW5EYXRhKHsgZGF0YSB9KTtcbiAgICAgIGxvZ2ljSW50ZXJmYWNlLnVwZGF0ZVVuaXQoeyBpZDogZGF0YS5pZCwgZGF0YSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNvcnQgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICBsb2dpY0ludGVyZmFjZS5hZGRQcm9qZWN0TGlzdChkYXRhKTtcbiAgICAgIH1cbiAgICAgIGlmIChzb3J0ID09PSAndG9kbycpIHtcbiAgICAgICAgZGF0YS5wcm9qZWN0SWQgPSBsb2dpY0ludGVyZmFjZS5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBsb2dpY0ludGVyZmFjZS5hZGRUb2RvTGlzdChkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYWZ0ZXJTdWJtaXNzaW9uKGZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IHNldEluaXRpYWxDdXJyZW50UHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBsb2dpY0ludGVyZmFjZS5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnN0IHByb2plY3RPYmogPSBkaXNwbGF5SW50ZXJmYWNlLmN1cnJlbnRPckxhc3RQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgaWYgKHByb2plY3RPYmopIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHByb2plY3RPYmopO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1TdWJtaXNzaW9uRXZlbnQgPSAoZm9ybSwgc29ydCkgPT4ge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtaXRGb3JtKHNvcnQsIGZvcm0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RTd2l0Y2hFdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZGlzcGxheUludGVyZmFjZS5nZXRQcm9qZWN0c0V4Y2VwdEN1cnJlbnQoKTtcbiAgICBpZiAoYnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdXBkYXRlQ3VycmVudFByb2plY3QoYnV0dG9uKTtcbiAgICAgICAgICBkaXNwbGF5SW50ZXJmYWNlLnJlbG9hZFNjcmVlbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0VW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCBpZCA9IGxvZ2ljSW50ZXJmYWNlLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgZGlzcGxheUludGVyZmFjZS5kZWxldGVVbml0KHsgaWQgfSk7XG4gICAgbG9naWNJbnRlcmZhY2UuZGVsZXRlVW5pdChpZCk7XG4gICAgZGlzcGxheUludGVyZmFjZS5yZWxvYWRTY3JlZW4oKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvVW5pdCA9IChidXR0b24pID0+IHtcbiAgICBjb25zdCBpZCA9IGRpc3BsYXlJbnRlcmZhY2UuZGVsZXRlVW5pdCh7IGJ1dHRvbiB9KTtcbiAgICBsb2dpY0ludGVyZmFjZS5kZWxldGVVbml0KGlkKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVFdmVudCA9ICh3b3JkKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlQWxsQnV0dG9uID0gZGlzcGxheUludGVyZmFjZS5nZXREZWxldGVCdXR0b25BbGwod29yZCk7XG4gICAgZGVsZXRlQWxsQnV0dG9uLmZvckVhY2goKGRlbGV0ZUJ0bikgPT4ge1xuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAod29yZCA9PT0gJ3Byb2plY3QnKSBkZWxldGVQcm9qZWN0VW5pdCgpO1xuICAgICAgICBpZiAod29yZCA9PT0gJ3RvZG8nKSBkZWxldGVUb2RvVW5pdChkZWxldGVCdG4pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZG9uZVVuaXQgPSAoYnV0dG9uKSA9PiB7XG4gICAgY29uc3QgaWQgPSBkaXNwbGF5SW50ZXJmYWNlLnRvZ2dsZURvbmUoYnV0dG9uKTtcbiAgICBsb2dpY0ludGVyZmFjZS5kb25lVW5pdChpZCk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUV2ZW50ID0gKHdvcmQpID0+IHtcbiAgICBjb25zdCBkb25lQWxsQnRuID0gZGlzcGxheUludGVyZmFjZS5nZXREb25lQnV0dG9uQWxsKHdvcmQpO1xuICAgIGRvbmVBbGxCdG4uZm9yRWFjaCgoZG9uZUJ0bikgPT4ge1xuICAgICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9uZVVuaXQoZG9uZUJ0bik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBpZCA9IGxvZ2ljSW50ZXJmYWNlLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgcmV0dXJuIGRpc3BsYXlJbnRlcmZhY2Uub3BlbkZvcm1Ub0VkaXQoeyBpZCB9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0VG9kbyA9IGJ1dHRvbiA9PiBkaXNwbGF5SW50ZXJmYWNlLm9wZW5Gb3JtVG9FZGl0KHsgYnV0dG9uIH0pO1xuXG4gIGNvbnN0IGVkaXRVbml0ID0gKHNvcnQsIGJ1dHRvbikgPT4ge1xuICAgIGRpc3BsYXlJbnRlcmZhY2Uub3RoZXJCdXR0b25PZmYoYnV0dG9uKTtcbiAgICBjb25zdCB7IHN0YXR1cywgZm9ybSB9ID0gKHNvcnQgPT09ICdwcm9qZWN0JykgPyBlZGl0UHJvamVjdCgpIDogZWRpdFRvZG8oYnV0dG9uKTtcbiAgICBpZiAoc3RhdHVzID09PSAnb3BlbmVkJykge1xuICAgICAgc3VibWl0Rm9ybShzb3J0LCBmb3JtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybVN1Ym1pc3Npb25FdmVudChmb3JtLCBzb3J0KTtcbiAgICAgIGRpc3BsYXlJbnRlcmZhY2UuZm9jdXNTZXQoZm9ybSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGVkaXRFdmVudCA9IChzb3J0KSA9PiB7XG4gICAgY29uc3QgZWRpdEFsbEJ0biA9IGRpc3BsYXlJbnRlcmZhY2UuZ2V0RWRpdEJ1dHRvbkFsbChzb3J0KTtcbiAgICBlZGl0QWxsQnRuLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBlZGl0VW5pdChzb3J0LCBidG4pOyB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwcm9ncmFtUmVzZXRFdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCByZXNldEJ0biA9IGRpc3BsYXlJbnRlcmZhY2UuZ2V0UmVzZXRCdXR0b24oKTtcbiAgICBsZXQgbnVtID0gMDtcbiAgICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG51bSArPSAxO1xuICAgICAgaWYgKG51bSA8IDcpIHJldHVybjsgLy8gcmVzZXQgc2hvdWxkIGJlIGhpZGRlbiBmcm9tIHVzZXJcbiAgICAgIGxvZ2ljSW50ZXJmYWNlLnJlc2V0U3RvcmFnZSgpO1xuICAgICAgZGlzcGxheUludGVyZmFjZS5yZWxvYWRTY3JlZW4oKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvcGVuRm9ybUV2ZW50ID0gKG9wZW4sIGZvcm0pID0+IHtcbiAgICBvcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGlzcGxheUludGVyZmFjZS5vdGhlckJ1dHRvbk9mZihvcGVuKTtcbiAgICAgIGRpc3BsYXlJbnRlcmZhY2UudG9nZ2xlTmV3Rm9ybShmb3JtKTtcbiAgICAgIGRpc3BsYXlJbnRlcmZhY2UuZm9jdXNTZXQoZm9ybSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRXZlbnRzID0gKHdvcmQpID0+IHtcbiAgICBjb25zdCB7IG9wZW4sIGZvcm0gfSA9IGRpc3BsYXlJbnRlcmZhY2UuZ2V0Rm9ybUxheW91dCh3b3JkKTtcbiAgICBvcGVuRm9ybUV2ZW50KG9wZW4sIGZvcm0pO1xuICAgIGZvcm1TdWJtaXNzaW9uRXZlbnQoZm9ybSwgd29yZCk7XG4gICAgZWRpdEV2ZW50KHdvcmQpO1xuICAgIGRlbGV0ZUV2ZW50KHdvcmQpO1xuICAgIGlmICh3b3JkID09PSAndG9kbycpIHtcbiAgICAgIGRvbmVFdmVudCh3b3JkKTtcbiAgICB9XG4gICAgaWYgKHdvcmQgPT09ICdwcm9qZWN0Jykge1xuICAgICAgcHJvamVjdFN3aXRjaEV2ZW50KCk7XG4gICAgICBwcm9ncmFtUmVzZXRFdmVudCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGxvZ2ljSW50ZXJmYWNlLnNldEluaXQoKTtcbiAgICBkaXNwbGF5SW50ZXJmYWNlLnJlbmRlcigpO1xuICAgIGRpc3BsYXlJbnRlcmZhY2UuZHluYW1pY1NldHRpbmcoKTtcbiAgICBwcm9qZWN0U2V0dGluZygpO1xuICAgIHNldEluaXRpYWxDdXJyZW50UHJvamVjdCgpO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIGluaXQoKTtcbiAgICBbJ3Byb2plY3QnLCAndG9kbyddLmZvckVhY2god29yZCA9PiBjcmVhdGVFdmVudHMod29yZCkpO1xuICB9O1xuXG4gIHJldHVybiB7IHN0YXJ0IH07XG59KSgpO1xuXG5pbnRlcmZhY2VNYWluLnN0YXJ0KCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUb2RvLCBtYWluQ3JlYXRlIH0gZnJvbSAnLi9sb2dpY3MvY3JlYXRlX2xvZ2ljJztcbmltcG9ydCByZWFkTG9naWMgZnJvbSAnLi9sb2dpY3MvcmVhZF9sb2dpYyc7XG5pbXBvcnQgZGVsZXRlTG9naWMgZnJvbSAnLi9sb2dpY3MvZGVsZXRlX2xvZ2ljJztcbmltcG9ydCB1cGRhdGVMb2dpYyBmcm9tICcuL2xvZ2ljcy91cGRhdGVfbG9naWMnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9sb2dpY3Mvc3RvcmFnZSc7XG5cbmNvbnN0IGxvZ2ljSW50ZXJmYWNlID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdExpc3QgPSBkYXRhID0+IGNyZWF0ZVByb2plY3QuYWRkUHJvamVjdExpc3QoZGF0YSk7XG4gIGNvbnN0IGFkZFRvZG9MaXN0ID0gZGF0YSA9PiBjcmVhdGVUb2RvLmFkZFRvZG9MaXN0KGRhdGEpO1xuICBjb25zdCB1cGRhdGVUb2RvTGlzdEZvclByb2plY3QgPSBpZCA9PiBjcmVhdGVUb2RvLnNldFRvZG9MaXN0Rm9yUHJvamVjdChpZCk7XG5cbiAgY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiByZWFkTG9naWMuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiByZWFkTG9naWMuZ2V0UHJvamVjdExpc3QoKTtcbiAgY29uc3QgZ2V0VG9kb0xpc3RGb3JQcm9qZWN0ID0gKCkgPT4gcmVhZExvZ2ljLmdldFRvZG9MaXN0Rm9yUHJvamVjdCgpO1xuXG4gIGNvbnN0IGRlbGV0ZVVuaXQgPSBpZCA9PiBkZWxldGVMb2dpYy5kZWxldGVVbml0KGlkKTtcbiAgY29uc3QgcmVzZXRTdG9yYWdlID0gKCkgPT4gc3RvcmFnZS5yZXNldFN0b3JhZ2UoKTtcblxuICBjb25zdCBmaWxsSW5EYXRhID0gZGF0YSA9PiB1cGRhdGVMb2dpYy5maWxsSW5EYXRhKGRhdGEpO1xuICBjb25zdCBkb25lVW5pdCA9IGlkID0+IHVwZGF0ZUxvZ2ljLmRvbmVVbml0KGlkKTtcbiAgY29uc3QgdXBkYXRlVW5pdCA9IG9iaiA9PiB1cGRhdGVMb2dpYy51cGRhdGVVbml0KG9iaik7XG5cbiAgY29uc3Qgc2V0SW5pdCA9ICgpID0+IG1haW5DcmVhdGUuc2V0SW5pdCgpO1xuXG4gIHJldHVybiB7XG4gICAgc2V0SW5pdCxcbiAgICBhZGRQcm9qZWN0TGlzdCxcbiAgICBhZGRUb2RvTGlzdCxcbiAgICBnZXRDdXJyZW50UHJvamVjdCxcbiAgICByZXNldFN0b3JhZ2UsXG4gICAgZ2V0UHJvamVjdExpc3QsXG4gICAgZ2V0VG9kb0xpc3RGb3JQcm9qZWN0LFxuICAgIHVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdCxcbiAgICBkZWxldGVVbml0LFxuICAgIGZpbGxJbkRhdGEsXG4gICAgZG9uZVVuaXQsXG4gICAgdXBkYXRlVW5pdCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2ljSW50ZXJmYWNlO1xuIiwiaW1wb3J0IHsgcHJvamVjdCwgdG9kbywgc2F2aW5ncyB9IGZyb20gJy4vb2JqZWN0cyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jb25zdCBnZXROZXdJZCA9IChzb3J0KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7fTtcbiAgbGV0IGlkO1xuICBpZiAoc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCdpZHMnKSAmJiBzdG9yYWdlLmdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ2lkcycpW2Ake3NvcnR9TGFzdElkYF0pIHtcbiAgICBpZCA9IHN0b3JhZ2UuZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSgnaWRzJylbYCR7c29ydH1MYXN0SWRgXTtcbiAgICBjb25zdCBuZXdOdW1iZXIgPSBOdW1iZXIoaWQuc3BsaXQoJy0nKVsxXSkgKyAxO1xuICAgIGlkID0gYCR7c29ydH0tJHtuZXdOdW1iZXJ9YDtcbiAgfSBlbHNlIHtcbiAgICBpZCA9IGAke3NvcnR9LTFgO1xuICB9XG4gIGRhdGFbYCR7c29ydH1MYXN0SWRgXSA9IGlkO1xuICBkYXRhW2Ake3NvcnR9Q3VycmVudElkYF0gPSBpZDtcbiAgc3RvcmFnZS5hcHBlbmRKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdpZHMnLCBkYXRhIH0pO1xuICByZXR1cm4gaWQ7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0RGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZURhdGEgPSBzdG9yYWdlLmdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ3Byb2plY3QnKTtcbiAgICBpZiAoIXN0b3JhZ2VEYXRhIHx8IHN0b3JhZ2VEYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBbXG4gICAgICAgIHsgcHJvamVjdE5hbWU6ICdkZWZhdWx0IHByb2plY3QnLCBpZDogJ3Byb2plY3QtMScgfSxcbiAgICAgIF07XG4gICAgICBzdG9yYWdlLnNldEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydDogJ3Byb2plY3QnLCBkYXRhOiBkZWZhdWx0UHJvamVjdCB9KTtcbiAgICAgIHN0b3JhZ2UuYXBwZW5kSnNvbkluZm9Ub1N0b3JhZ2Uoe1xuICAgICAgICBzb3J0OiAnaWRzJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHByb2plY3RMYXN0SWQ6IGRlZmF1bHRQcm9qZWN0WzBdLmlkLFxuICAgICAgICAgIHByb2plY3RDdXJyZW50SWQ6IGRlZmF1bHRQcm9qZWN0WzBdLmlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3RMaXN0ID0gKHsgcHJvamVjdE5hbWUsIGlkIH0pID0+IHtcbiAgICBjb25zdCBjb3B5UHJvamVjdElkID0gaWQgfHwgZ2V0TmV3SWQoJ3Byb2plY3QnKTtcbiAgICBzYXZpbmdzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCh7IHByb2plY3ROYW1lLCBpZDogY29weVByb2plY3RJZCB9KSk7XG4gICAgc3RvcmFnZS5zZXRKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdwcm9qZWN0JywgZGF0YTogc2F2aW5ncy5wcm9qZWN0TGlzdCB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRJbmZvRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCdwcm9qZWN0Jyk7XG4gICAgaWYgKHZhbCkgc2F2aW5ncy5wcm9qZWN0TGlzdCA9IHZhbDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3RMaXN0LCBzZXRJbmZvRnJvbVN0b3JhZ2UsIHNldERlZmF1bHRQcm9qZWN0LFxuICB9O1xufSkoKTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFRvZG9MaXN0ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEuaWQpIGRhdGEuaWQgPSBnZXROZXdJZCgndG9kbycpO1xuICAgIHNhdmluZ3MudG9kb0xpc3QucHVzaCh0b2RvKGRhdGEpKTtcbiAgICBzdG9yYWdlLnNldEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydDogJ3RvZG8nLCBkYXRhOiBzYXZpbmdzLnRvZG9MaXN0IH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldEluZm9Gcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB2YWwgPSBzdG9yYWdlLmdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ3RvZG8nKTtcbiAgICBpZiAodmFsKSBzYXZpbmdzLnRvZG9MaXN0ID0gdmFsO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9MaXN0Rm9yUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBzYXZpbmdzLnRvZG9MaXN0Rm9yUHJvamVjdCA9IHNhdmluZ3MudG9kb0xpc3QuZmlsdGVyKGUgPT4gZS5wcm9qZWN0SWQgPT09IHByb2plY3RJZCk7XG4gICAgc3RvcmFnZS5hcHBlbmRKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdpZHMnLCBkYXRhOiB7IHByb2plY3RDdXJyZW50SWQ6IHByb2plY3RJZCB9IH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVG9kb0xpc3QsIHNldFRvZG9MaXN0Rm9yUHJvamVjdCwgc2V0SW5mb0Zyb21TdG9yYWdlLFxuICB9O1xufSkoKTtcblxuY29uc3QgbWFpbkNyZWF0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldEluaXQgPSAoKSA9PiB7XG4gICAgY3JlYXRlUHJvamVjdC5zZXREZWZhdWx0UHJvamVjdCgpO1xuICAgIGNyZWF0ZVByb2plY3Quc2V0SW5mb0Zyb21TdG9yYWdlKCk7XG4gICAgY3JlYXRlVG9kby5zZXRJbmZvRnJvbVN0b3JhZ2UoKTtcbiAgfTtcblxuICByZXR1cm4geyBzZXRJbml0LCBnZXROZXdJZCB9O1xufSkoKTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgY3JlYXRlVG9kbywgbWFpbkNyZWF0ZSB9O1xuIiwiaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IHNhdmluZ3MgfSBmcm9tICcuL29iamVjdHMnO1xuXG5jb25zdCBkZWxldGVMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZVRvZG9Vbml0ID0gKGlkU29ydCwgaWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCd0b2RvJyk7XG4gICAgY29uc3QgdXBkYXRlZCA9IChkYXRhID8gZGF0YS5maWx0ZXIoZSA9PiBlW2lkU29ydF0gIT09IGlkKSA6IFtdKTtcbiAgICBzYXZpbmdzLnRvZG9MaXN0ID0gdXBkYXRlZDtcbiAgICBzdG9yYWdlLnNldEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydDogJ3RvZG8nLCBkYXRhOiB1cGRhdGVkIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RVbml0ID0gKGlkU29ydCwgaWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCdwcm9qZWN0Jyk7XG4gICAgY29uc3QgdXBkYXRlZCA9IChkYXRhID8gZGF0YS5maWx0ZXIoZSA9PiBlLmlkICE9PSBpZCkgOiBbXSk7XG4gICAgc2F2aW5ncy5wcm9qZWN0TGlzdCA9IHVwZGF0ZWQ7XG4gICAgc3RvcmFnZS5zZXRKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdwcm9qZWN0JywgZGF0YTogdXBkYXRlZCB9KTtcbiAgICBkZWxldGVUb2RvVW5pdCgncHJvamVjdElkJywgaWQpO1xuICAgIHN0b3JhZ2UucmVzZXRKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdpZHMnLCBkYXRhOiB7IHByb2plY3RDdXJyZW50SWQ6IG51bGwgfSB9KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVVbml0ID0gKGlkKSA9PiB7XG4gICAgY29uc3Qgc29ydCA9IGlkLnNwbGl0KCctJylbMF07XG4gICAgaWYgKHNvcnQgPT09ICd0b2RvJykgZGVsZXRlVG9kb1VuaXQoJ2lkJywgaWQpO1xuICAgIGlmIChzb3J0ID09PSAncHJvamVjdCcpIGRlbGV0ZVByb2plY3RVbml0KCdpZCcsIGlkKTtcbiAgfTtcblxuICByZXR1cm4geyBkZWxldGVVbml0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVMb2dpYztcbiIsImNvbnN0IHByb2plY3QgPSAoeyBwcm9qZWN0TmFtZSwgaWQgfSkgPT4gKHsgcHJvamVjdE5hbWUsIGlkIH0pO1xuY29uc3QgdG9kbyA9ICh7XG4gIHRpdGxlLCBwcm9qZWN0SWQsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaWQsIGRvbmUgPSBmYWxzZSxcbn0pID0+ICh7XG4gIHRpdGxlLCBwcm9qZWN0SWQsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaWQsIGRvbmUsXG59KTtcblxuY29uc3Qgc2F2aW5ncyA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG4gIGNvbnN0IHRvZG9MaXN0ID0gW107XG4gIGNvbnN0IHRvZG9MaXN0Rm9yUHJvamVjdCA9IFtdO1xuICByZXR1cm4geyBwcm9qZWN0TGlzdCwgdG9kb0xpc3QsIHRvZG9MaXN0Rm9yUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHtcbiAgcHJvamVjdCwgdG9kbywgc2F2aW5ncyxcbn07XG4iLCJpbXBvcnQgeyBzYXZpbmdzIH0gZnJvbSAnLi9vYmplY3RzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5cbmNvbnN0IHJlYWRMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlkcyA9IHN0b3JhZ2UuZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSgnaWRzJyk7XG4gICAgaWYgKCFpZHMpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGlkcy5wcm9qZWN0Q3VycmVudElkO1xuICB9O1xuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHNhdmluZ3MucHJvamVjdExpc3Q7XG4gIGNvbnN0IGdldFRvZG9MaXN0Rm9yUHJvamVjdCA9ICgpID0+IHNhdmluZ3MudG9kb0xpc3RGb3JQcm9qZWN0O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Q3VycmVudFByb2plY3QsIGdldFByb2plY3RMaXN0LCBnZXRUb2RvTGlzdEZvclByb2plY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCByZWFkTG9naWM7XG4iLCJjb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0SnNvbkluZm9Ub1N0b3JhZ2UgPSAoeyBzb3J0LCBkYXRhIH0pID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oc29ydCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZEpzb25JbmZvVG9TdG9yYWdlID0gKHsgc29ydCwgZGF0YSB9KSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRhID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKHNvcnQpO1xuICAgIGNvbnN0IHVwZGF0ZSA9IG9yaWdpbmFsRGF0YSB8fCB7fTtcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuICAgICAgdXBkYXRlW2tdID0gdjtcbiAgICB9XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvcnQsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGdldEpzb25JbmZvRnJvbVN0b3JhZ2UgPSAoc29ydCkgPT4ge1xuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oc29ydCkpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzb3J0KSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRKc29uSW5mb1RvU3RvcmFnZSA9ICh7IHNvcnQsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0YSA9IGdldEpzb25JbmZvRnJvbVN0b3JhZ2Uoc29ydCk7XG4gICAgY29uc3QgdXBkYXRlID0gb3JpZ2luYWxEYXRhIHx8IHt9O1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IGRlbGV0ZSB1cGRhdGVba2V5XSk7XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb3J0LCBKU09OLnN0cmluZ2lmeSh1cGRhdGUpKTtcbiAgfTtcblxuICBjb25zdCByZXNldFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0SnNvbkluZm9Ub1N0b3JhZ2UsXG4gICAgYXBwZW5kSnNvbkluZm9Ub1N0b3JhZ2UsXG4gICAgZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSxcbiAgICByZXNldEpzb25JbmZvVG9TdG9yYWdlLFxuICAgIHJlc2V0U3RvcmFnZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7XG4iLCJpbXBvcnQgeyBzYXZpbmdzIH0gZnJvbSAnLi9vYmplY3RzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgcmVhZExvZ2ljIGZyb20gJy4vcmVhZF9sb2dpYyc7XG5cbmNvbnN0IHVwZGF0ZUxvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgZG9uZVVuaXQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBzb3J0ID0gaWQuc3BsaXQoJy0nKVswXTtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKHNvcnQpO1xuICAgIGNvbnN0IG9iaiA9IGRhdGEuZmluZChlID0+IGUuaWQgPT09IGlkKTtcbiAgICBpZiAob2JqKSBvYmouZG9uZSA9ICFvYmouZG9uZTtcbiAgICBzYXZpbmdzW2Ake3NvcnR9TGlzdGBdID0gZGF0YTtcbiAgICBzdG9yYWdlLnNldEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydCwgZGF0YSB9KTtcbiAgfTtcblxuICBjb25zdCBmaWxsSW5EYXRhID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgaWYgKCFkYXRhLmlkKSByZXR1cm47XG4gICAgY29uc3QgaWRTZXQgPSBkYXRhLmlkLnNwbGl0KCctJyk7XG4gICAgY29uc3Qgc29ydCA9IGlkU2V0WzBdO1xuICAgIGlmIChzb3J0ID09PSAndG9kbycpIHtcbiAgICAgIGRhdGEucHJvamVjdElkID0gcmVhZExvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVVuaXQgPSAoeyBpZCwgZGF0YSB9KSA9PiB7XG4gICAgY29uc3Qgc29ydCA9IGlkLnNwbGl0KCctJylbMF07XG4gICAgY29uc3QgdXBkYXRpbmdEYXRhID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKHNvcnQpO1xuICAgIGNvbnN0IG9iaiA9IHVwZGF0aW5nRGF0YS5maW5kKGUgPT4gZS5pZCA9PT0gaWQpO1xuICAgIHVwZGF0aW5nRGF0YS5zcGxpY2UodXBkYXRpbmdEYXRhLmluZGV4T2Yob2JqKSwgMSwgZGF0YSk7XG4gICAgc2F2aW5nc1tgJHtzb3J0fUxpc3RgXSA9IHVwZGF0aW5nRGF0YTtcbiAgICBzdG9yYWdlLnNldEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydCwgZGF0YTogdXBkYXRpbmdEYXRhIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGRvbmVVbml0LCB1cGRhdGVVbml0LCBmaWxsSW5EYXRhIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVMb2dpYztcbiJdLCJzb3VyY2VSb290IjoiIn0=