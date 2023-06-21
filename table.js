function createTable(parent, headData, bodyData) {
  // 1 创建表头
  var table = createHead(parent, headData);
  // 2 创建数据行
  createBody(table, bodyData);
}

// 1 创建表头
function createHead(parent, headData) {
  // 1 表头
  var table = document.createElement('table');
  parent.appendChild(table);
  table.border = '1px';
  table.width = '500px';
  table.cellSpacing = 0;

  var thead = document.createElement('thead');
  table.appendChild(thead);

  var tr = document.createElement('tr');
  thead.appendChild(tr);
  tr.style.height = '50px';
  tr.style.backgroundColor = 'lightgray';

  // 生成表头中的列
  headData.forEach(function (item) {
    var th = document.createElement('th');
    tr.appendChild(th);
    setInnerText(th, item);
  })
  return table;
}

// 2 创建数据行
function createBody(table, bodyData) {
  // 2 数据行
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  // 设置数据行的内容居中
  tbody.style.textAlign = 'center';

  // 遍历数据
  bodyData.forEach(function (item) {
    // 创建行
    tr = document.createElement('tr');
    tbody.appendChild(tr);
    // 创建列
    // 遍历对象
    for (var key in item) {
      // item[key]
      var td = document.createElement('td');
      tr.appendChild(td);
      setInnerText(td, item[key]);
    }

    // 操作的列
    td = document.createElement('td');
    tr.appendChild(td);
    // 创建删除的超链接
    var link = document.createElement('a');
    link.href = 'javascript:void(0)';
    td.appendChild(link);
    setInnerText(link, '删除');
    // 注册事件
    link.onclick = linkClick;
  });

  // 事件处理函数
  function linkClick() {
    // 提示
    var r = confirm('是否确定删除?');
    if (r) {
      //删除
      // 获取点击删除按钮 所在的行
      var tr = this.parentNode.parentNode;

      tbody.removeChild(tr);
    }
  }
}
