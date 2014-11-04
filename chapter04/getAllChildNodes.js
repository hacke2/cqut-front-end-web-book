var nodes = document.getElementById('header').childNodes;
    console.log(nodes);
    
      @description 深度遍历所有子节点
      @param nodes 当前遍历的子节点集合
     
    function getAllChildNodes(nodes) {
        var total = nodes && nodes.length;
        console.log('total ' + total);
        for(var i = 0; i  total; i++) {
            当前顶级第i个节点
            var curNode = nodes[i]; 
            如果当前节点不为null
            if(curNode) { 
                console.log(curNode);
                如果还有下级节点
                if(curNode.hasChildNodes()) { 
                    arguments.callee(curNode.childNodes);
                }
            }
        }    
}