/**
 * 
 */
Ext.onReady(function() {  
    var win = new Ext.Window({  
        title : '窗口',  
        width : 476,  
        height : 374,  
        html : '<div>这里是窗体内容</div>',  
        resizable : true,  
        modal : true,  
        closable : true,  
        maximizable : true,  
        minimizable : true  
    });  
    win.show();  
});  

 