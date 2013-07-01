Ext.data.JsonP.Ext_ia_grid_plugin_RowEditing({"tagname":"class","name":"Ext.ia.grid.plugin.RowEditing","extends":"Ext.grid.plugin.RowEditing","mixins":[],"alternateClassNames":[],"aliases":{"plugin":["ia-rowediting"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.ia.grid.plugin.RowEditing","code_type":"ext_define","members":{"cfg":[],"property":[{"name":"autoCancel","tagname":"property","owner":"Ext.ia.grid.plugin.RowEditing","meta":{"private":true},"id":"property-autoCancel"},{"name":"clicksToEdit","tagname":"property","owner":"Ext.ia.grid.plugin.RowEditing","meta":{"private":true},"id":"property-clicksToEdit"},{"name":"clicksToMoveEditor","tagname":"property","owner":"Ext.ia.grid.plugin.RowEditing","meta":{"private":true},"id":"property-clicksToMoveEditor"},{"name":"errorSummary","tagname":"property","owner":"Ext.ia.grid.plugin.RowEditing","meta":{"private":true},"id":"property-errorSummary"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.ia.grid.plugin.RowEditing","meta":{},"id":"method-constructor"},{"name":"_cancelEdit","tagname":"method","owner":"Ext.ia.grid.plugin.RowEditing","meta":{"private":true},"id":"method-_cancelEdit"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":779,"files":[{"filename":"classes.js","href":"classes.html#Ext-ia-grid-plugin-RowEditing"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.grid.plugin.RowEditing"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.plugin.RowEditing<div class='subclass '><strong>Ext.ia.grid.plugin.RowEditing</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/classes.html#Ext-ia-grid-plugin-RowEditing' target='_blank'>classes.js</a></div></pre><div class='doc-contents'><p>Extends Ext.grid.plugin.RowEditing with\n- project-specific config\n- autoCancel logic (disabled for now)</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-autoCancel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.grid.plugin.RowEditing'>Ext.ia.grid.plugin.RowEditing</span><br/><a href='source/classes.html#Ext-ia-grid-plugin-RowEditing-property-autoCancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.plugin.RowEditing-property-autoCancel' class='name expandable'>autoCancel</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-clicksToEdit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.grid.plugin.RowEditing'>Ext.ia.grid.plugin.RowEditing</span><br/><a href='source/classes.html#Ext-ia-grid-plugin-RowEditing-property-clicksToEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.plugin.RowEditing-property-clicksToEdit' class='name expandable'>clicksToEdit</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>2</code></p></div></div></div><div id='property-clicksToMoveEditor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.grid.plugin.RowEditing'>Ext.ia.grid.plugin.RowEditing</span><br/><a href='source/classes.html#Ext-ia-grid-plugin-RowEditing-property-clicksToMoveEditor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.plugin.RowEditing-property-clicksToMoveEditor' class='name expandable'>clicksToMoveEditor</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='property-errorSummary' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.grid.plugin.RowEditing'>Ext.ia.grid.plugin.RowEditing</span><br/><a href='source/classes.html#Ext-ia-grid-plugin-RowEditing-property-errorSummary' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.plugin.RowEditing-property-errorSummary' class='name expandable'>errorSummary</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.grid.plugin.RowEditing'>Ext.ia.grid.plugin.RowEditing</span><br/><a href='source/classes.html#Ext-ia-grid-plugin-RowEditing-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.ia.grid.plugin.RowEditing-method-constructor' class='name expandable'>Ext.ia.grid.plugin.RowEditing</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.ia.grid.plugin.RowEditing\" rel=\"Ext.ia.grid.plugin.RowEditing\" class=\"docClass\">Ext.ia.grid.plugin.RowEditing</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.ia.grid.plugin.RowEditing\" rel=\"Ext.ia.grid.plugin.RowEditing\" class=\"docClass\">Ext.ia.grid.plugin.RowEditing</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_cancelEdit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.grid.plugin.RowEditing'>Ext.ia.grid.plugin.RowEditing</span><br/><a href='source/classes.html#Ext-ia-grid-plugin-RowEditing-method-_cancelEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.grid.plugin.RowEditing-method-_cancelEdit' class='name expandable'>_cancelEdit</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>On edit cancel, remove phantom row or reject existing row modifications\nhttp://www.sencha.com/forum/showthread.php?13...</div><div class='long'><p>On edit cancel, remove phantom row or reject existing row modifications\nhttp://www.sencha.com/forum/showthread.php?130412-OPEN-EXTJSIV-1649-RowEditing-improvement-suggestions\nNOTE: Disabled because it is managed better in ExtJS >= 4.0.7</p>\n</div></div></div></div></div></div></div>"});