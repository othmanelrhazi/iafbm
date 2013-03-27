Ext.data.JsonP.Ext_ia_form_field_ComboBox({"tagname":"class","name":"Ext.ia.form.field.ComboBox","extends":"Ext.form.field.ComboBox","mixins":[],"alternateClassNames":[],"aliases":{"widget":["ia-combo"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.ia.form.field.ComboBox","code_type":"ext_define","members":{"cfg":[],"property":[{"name":"lazyRender","tagname":"property","owner":"Ext.ia.form.field.ComboBox","meta":{"private":true},"id":"property-lazyRender"},{"name":"minChars","tagname":"property","owner":"Ext.ia.form.field.ComboBox","meta":{"private":true},"id":"property-minChars"},{"name":"queryMode","tagname":"property","owner":"Ext.ia.form.field.ComboBox","meta":{"private":true},"id":"property-queryMode"},{"name":"triggerAction","tagname":"property","owner":"Ext.ia.form.field.ComboBox","meta":{"private":true},"id":"property-triggerAction"},{"name":"typeAhead","tagname":"property","owner":"Ext.ia.form.field.ComboBox","meta":{"private":true},"id":"property-typeAhead"}],"method":[{"name":"initComponent","tagname":"method","owner":"Ext.ia.form.field.ComboBox","meta":{"private":true},"id":"method-initComponent"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":488,"files":[{"filename":"classes.js","href":"classes.html#Ext-ia-form-field-ComboBox"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.form.field.ComboBox"],"subclasses":["Ext.ia.form.field.VersionComboBox"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.form.field.ComboBox<div class='subclass '><strong>Ext.ia.form.field.ComboBox</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.ia.form.field.VersionComboBox' rel='Ext.ia.form.field.VersionComboBox' class='docClass'>Ext.ia.form.field.VersionComboBox</a></div><h4>Files</h4><div class='dependency'><a href='source/classes.html#Ext-ia-form-field-ComboBox' target='_blank'>classes.js</a></div></pre><div class='doc-contents'><p>Extends Ext.form.field.ComboBox with\n- remote store display workaround</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-lazyRender' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.form.field.ComboBox'>Ext.ia.form.field.ComboBox</span><br/><a href='source/classes.html#Ext-ia-form-field-ComboBox-property-lazyRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.form.field.ComboBox-property-lazyRender' class='name expandable'>lazyRender</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-minChars' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.form.field.ComboBox'>Ext.ia.form.field.ComboBox</span><br/><a href='source/classes.html#Ext-ia-form-field-ComboBox-property-minChars' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.form.field.ComboBox-property-minChars' class='name expandable'>minChars</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='property-queryMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.form.field.ComboBox'>Ext.ia.form.field.ComboBox</span><br/><a href='source/classes.html#Ext-ia-form-field-ComboBox-property-queryMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.form.field.ComboBox-property-queryMode' class='name expandable'>queryMode</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'local'</code></p></div></div></div><div id='property-triggerAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.form.field.ComboBox'>Ext.ia.form.field.ComboBox</span><br/><a href='source/classes.html#Ext-ia-form-field-ComboBox-property-triggerAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.form.field.ComboBox-property-triggerAction' class='name expandable'>triggerAction</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'all'</code></p></div></div></div><div id='property-typeAhead' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.form.field.ComboBox'>Ext.ia.form.field.ComboBox</span><br/><a href='source/classes.html#Ext-ia-form-field-ComboBox-property-typeAhead' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.form.field.ComboBox-property-typeAhead' class='name expandable'>typeAhead</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initComponent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ia.form.field.ComboBox'>Ext.ia.form.field.ComboBox</span><br/><a href='source/classes.html#Ext-ia-form-field-ComboBox-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ia.form.field.ComboBox-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>http://stackoverflow.com/questions/6587238/loading-the-items-for-a-combo-box-in-advance-with-extjs ...</div><div class='long'><p>http://stackoverflow.com/questions/6587238/loading-the-items-for-a-combo-box-in-advance-with-extjs</p>\n</div></div></div></div></div></div></div>"});