Ext.data.JsonP.Ext_ia_selectiongrid_Panel({"tagname":"class","name":"Ext.ia.selectiongrid.Panel","extends":"Ext.ia.grid.EditBasePanel","mixins":[],"alternateClassNames":[],"aliases":{"widget":["ia-selectiongrid"]},"singleton":false,"requires":["Ext.form.field.ComboBox","Ext.grid.Panel"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.ia.selectiongrid.Panel","code_type":"ext_define","members":{"cfg":[{"name":"combo","tagname":"cfg","owner":"Ext.ia.selectiongrid.Panel","meta":{"private":true},"id":"cfg-combo"},{"name":"grid","tagname":"cfg","owner":"Ext.ia.selectiongrid.Panel","meta":{"private":true},"id":"cfg-grid"},{"name":"makeData","tagname":"cfg","owner":"Ext.ia.selectiongrid.Panel","meta":{"private":true},"id":"cfg-makeData"}],"property":[{"name":"autoSync","tagname":"property","owner":"Ext.ia.grid.EditBasePanel","meta":{"private":true},"id":"property-autoSync"},{"name":"editable","tagname":"property","owner":"Ext.ia.grid.EditBasePanel","meta":{"private":true},"id":"property-editable"},{"name":"editingPluginId","tagname":"property","owner":"Ext.ia.grid.EditBasePanel","meta":{"private":true},"id":"property-editingPluginId"},{"name":"pageSize","tagname":"property","owner":"Ext.ia.grid.EditBasePanel","meta":{"private":true},"id":"property-pageSize"},{"name":"plugins","tagname":"property","owner":"Ext.ia.grid.EditBasePanel","meta":{"private":true},"id":"property-plugins"},{"name":"tbar","tagname":"property","owner":"Ext.ia.selectiongrid.Panel","meta":{"private":true},"id":"property-tbar"}],"method":[{"name":"getCombo","tagname":"method","owner":"Ext.ia.selectiongrid.Panel","meta":{"private":true},"id":"method-getCombo"},{"name":"getEditingPlugin","tagname":"method","owner":"Ext.ia.grid.EditBasePanel","meta":{"private":true},"id":"method-getEditingPlugin"},{"name":"getGrid","tagname":"method","owner":"Ext.ia.selectiongrid.Panel","meta":{},"id":"method-getGrid"},{"name":"getMakeData","tagname":"method","owner":"Ext.ia.selectiongrid.Panel","meta":{},"id":"method-getMakeData"},{"name":"initComponent","tagname":"method","owner":"Ext.ia.selectiongrid.Panel","meta":{"private":true},"id":"method-initComponent"},{"name":"setCombo","tagname":"method","owner":"Ext.ia.selectiongrid.Panel","meta":{},"id":"method-setCombo"},{"name":"setGrid","tagname":"method","owner":"Ext.ia.selectiongrid.Panel","meta":{},"id":"method-setGrid"},{"name":"setMakeData","tagname":"method","owner":"Ext.ia.selectiongrid.Panel","meta":{},"id":"method-setMakeData"},{"name":"setVersion","tagname":"method","owner":"Ext.ia.grid.EditBasePanel","meta":{"private":true},"id":"method-setVersion"},{"name":"updateState","tagname":"method","owner":"Ext.ia.grid.EditBasePanel","meta":{"private":true},"id":"method-updateState"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1110,"files":[{"filename":"classes.js","href":"classes.html#Ext-ia-selectiongrid-Panel"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.grid.Panel","Ext.ia.grid.EditBasePanel"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.Panel<div class='subclass '><a href='#!/api/Ext.ia.grid.EditBasePanel' rel='Ext.ia.grid.EditBasePanel' class='docClass'>Ext.ia.grid.EditBasePanel</a><div class='subclass '><strong>Ext.ia.selectiongrid.Panel</strong></div></div></div><h4>Requires</h4><div class='dependency'>Ext.form.field.ComboBox</div><div class='dependency'>Ext.grid.Panel</div><h4>Files</h4><div class='dependency'><a href='source/classes.html#Ext-ia-selectiongrid-Panel' target='_blank'>classes.js</a></div></pre><div class='doc-contents'><p>Selection grid enables the user to add items from one store into another\nby searching the source store using an autocomplete list\nand adding items to the destination store.\nThe developer can write the makeData() conversion function,\nin order to translate source store record into destination store record.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-combo' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.selectiongrid.Panel'>Ext.ia.selectiongrid.Panel</span><br/><a href='source/classes.html#Ext-ia-selectiongrid-Panel-cfg-combo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.selectiongrid.Panel-cfg-combo' class='name expandable'>combo</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{store: null, pageSize: 5}</code></p></div></div></div><div id='cfg-grid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.selectiongrid.Panel'>Ext.ia.selectiongrid.Panel</span><br/><a href='source/classes.html#Ext-ia-selectiongrid-Panel-cfg-grid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.selectiongrid.Panel-cfg-grid' class='name expandable'>grid</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{store: null, autoSync: false}</code></p></div></div></div><div id='cfg-makeData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.selectiongrid.Panel'>Ext.ia.selectiongrid.Panel</span><br/><a href='source/classes.html#Ext-ia-selectiongrid-Panel-cfg-makeData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.selectiongrid.Panel-cfg-makeData' class='name not-expandable'>makeData</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-autoSync' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ia.grid.EditBasePanel' rel='Ext.ia.grid.EditBasePanel' class='defined-in docClass'>Ext.ia.grid.EditBasePanel</a><br/><a href='source/classes.html#Ext-ia-grid-EditBasePanel-property-autoSync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.EditBasePanel-property-autoSync' class='name expandable'>autoSync</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Disabled ...</div><div class='long'><p>Disabled</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-editable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ia.grid.EditBasePanel' rel='Ext.ia.grid.EditBasePanel' class='defined-in docClass'>Ext.ia.grid.EditBasePanel</a><br/><a href='source/classes.html#Ext-ia-grid-EditBasePanel-property-editable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.EditBasePanel-property-editable' class='name expandable'>editable</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-editingPluginId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ia.grid.EditBasePanel' rel='Ext.ia.grid.EditBasePanel' class='defined-in docClass'>Ext.ia.grid.EditBasePanel</a><br/><a href='source/classes.html#Ext-ia-grid-EditBasePanel-property-editingPluginId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.EditBasePanel-property-editingPluginId' class='name not-expandable'>editingPluginId</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-pageSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ia.grid.EditBasePanel' rel='Ext.ia.grid.EditBasePanel' class='defined-in docClass'>Ext.ia.grid.EditBasePanel</a><br/><a href='source/classes.html#Ext-ia-grid-EditBasePanel-property-pageSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.EditBasePanel-property-pageSize' class='name expandable'>pageSize</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-plugins' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ia.grid.EditBasePanel' rel='Ext.ia.grid.EditBasePanel' class='defined-in docClass'>Ext.ia.grid.EditBasePanel</a><br/><a href='source/classes.html#Ext-ia-grid-EditBasePanel-property-plugins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.EditBasePanel-property-plugins' class='name expandable'>plugins</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-tbar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.selectiongrid.Panel'>Ext.ia.selectiongrid.Panel</span><br/><a href='source/classes.html#Ext-ia-selectiongrid-Panel-property-tbar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.selectiongrid.Panel-property-tbar' class='name expandable'>tbar</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getCombo' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.selectiongrid.Panel'>Ext.ia.selectiongrid.Panel</span><br/><a href='source/classes.html#Ext-ia-selectiongrid-Panel-method-getCombo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.selectiongrid.Panel-method-getCombo' class='name expandable'>getCombo</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getEditingPlugin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ia.grid.EditBasePanel' rel='Ext.ia.grid.EditBasePanel' class='defined-in docClass'>Ext.ia.grid.EditBasePanel</a><br/><a href='source/classes.html#Ext-ia-grid-EditBasePanel-method-getEditingPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.EditBasePanel-method-getEditingPlugin' class='name expandable'>getEditingPlugin</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getGrid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.selectiongrid.Panel'>Ext.ia.selectiongrid.Panel</span><br/><a href='source/classes.html#Ext-ia-selectiongrid-Panel-cfg-grid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.selectiongrid.Panel-method-getGrid' class='name expandable'>getGrid</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Returns the value of grid. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.ia.selectiongrid.Panel-cfg-grid\" rel=\"Ext.ia.selectiongrid.Panel-cfg-grid\" class=\"docClass\">grid</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMakeData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.selectiongrid.Panel'>Ext.ia.selectiongrid.Panel</span><br/><a href='source/classes.html#Ext-ia-selectiongrid-Panel-cfg-makeData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.selectiongrid.Panel-method-getMakeData' class='name expandable'>getMakeData</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Returns the value of makeData. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.ia.selectiongrid.Panel-cfg-makeData\" rel=\"Ext.ia.selectiongrid.Panel-cfg-makeData\" class=\"docClass\">makeData</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.selectiongrid.Panel'>Ext.ia.selectiongrid.Panel</span><br/><a href='source/classes.html#Ext-ia-selectiongrid-Panel-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.selectiongrid.Panel-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Ext.ia.grid.EditBasePanel-method-initComponent' rel='Ext.ia.grid.EditBasePanel-method-initComponent' class='docClass'>Ext.ia.grid.EditBasePanel.initComponent</a></p></div></div></div><div id='method-setCombo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.selectiongrid.Panel'>Ext.ia.selectiongrid.Panel</span><br/><a href='source/classes.html#Ext-ia-selectiongrid-Panel-cfg-combo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.selectiongrid.Panel-method-setCombo' class='name expandable'>setCombo</a>( <span class='pre'>combo</span> )</div><div class='description'><div class='short'>Sets the value of combo. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.ia.selectiongrid.Panel-cfg-combo\" rel=\"Ext.ia.selectiongrid.Panel-cfg-combo\" class=\"docClass\">combo</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>combo</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setGrid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.selectiongrid.Panel'>Ext.ia.selectiongrid.Panel</span><br/><a href='source/classes.html#Ext-ia-selectiongrid-Panel-cfg-grid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.selectiongrid.Panel-method-setGrid' class='name expandable'>setGrid</a>( <span class='pre'>grid</span> )</div><div class='description'><div class='short'>Sets the value of grid. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.ia.selectiongrid.Panel-cfg-grid\" rel=\"Ext.ia.selectiongrid.Panel-cfg-grid\" class=\"docClass\">grid</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setMakeData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.selectiongrid.Panel'>Ext.ia.selectiongrid.Panel</span><br/><a href='source/classes.html#Ext-ia-selectiongrid-Panel-cfg-makeData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.selectiongrid.Panel-method-setMakeData' class='name expandable'>setMakeData</a>( <span class='pre'>makeData</span> )</div><div class='description'><div class='short'>Sets the value of makeData. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.ia.selectiongrid.Panel-cfg-makeData\" rel=\"Ext.ia.selectiongrid.Panel-cfg-makeData\" class=\"docClass\">makeData</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>makeData</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setVersion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ia.grid.EditBasePanel' rel='Ext.ia.grid.EditBasePanel' class='defined-in docClass'>Ext.ia.grid.EditBasePanel</a><br/><a href='source/classes.html#Ext-ia-grid-EditBasePanel-method-setVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.EditBasePanel-method-setVersion' class='name expandable'>setVersion</a>( <span class='pre'>version</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>version</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateState' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ia.grid.EditBasePanel' rel='Ext.ia.grid.EditBasePanel' class='defined-in docClass'>Ext.ia.grid.EditBasePanel</a><br/><a href='source/classes.html#Ext-ia-grid-EditBasePanel-method-updateState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.EditBasePanel-method-updateState' class='name expandable'>updateState</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>"});