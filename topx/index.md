---
title: 文章热度排序
date: 2019-01-15 14:54:12
categories:
tags:
comments: false
top:
img:
password:
---
<p id="top"></p>
<script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.1.js"></script>
<script>AV.initialize("TCcAB5wC7Rjx4Xe9aFUYiMUU-gzGzoHsz", "pC764tcMRXbraCg5anMgT3QF");</script>
<script type="text/javascript">
  var num=30 //最终只返回n条结果
  var time=0
  var title=""
  var url=""
  var query = new AV.Query('Counter');//表名
  query.notEqualTo('id',0); //id不为0的结果
  query.descending('time'); //结果按阅读次数降序排序
  query.limit(num);  
  query.find().then(function (todo) {
    for (var i=0;i<num;i++){ 
      // console.log(todo[i]);
      var result=todo[i].attributes;
      time=result.time;  //阅读次数
      title=result.title; //文章标题
      url=result.url;     //文章url
      // console.log(title);
      // console.log(url);
      // console.log(time);
      var content="<span id='inline-toc'>"+(i+1)+".</span>"+"<a href='"+"https://www.52share.online"+url+"'>"+"<font color='#0477ab'>"+title+"</font>"+"</a><br />"+"<font color='#555'>阅读次数：<span style='border-radius: 11px;padding: 1px 7px;background-image: linear-gradient(120deg, rgba(247, 149, 51, 0.5) 0%, rgba(243, 112, 85, 0.5) 21%, rgba(239, 78, 123, 0.5) 30%, rgba(161, 102, 171, 0.5) 44%, rgba(80, 115, 184, 0.5) 58%, rgba(16, 152, 173, 0.5) 72%, rgba(7, 179, 155, 0.5) 86%, rgba(109, 186, 130, 0.5) 100%);color: black;'>"+time+"</sapn></font><br /><br />";
      // document.write("<a href='"+"http://thief.one/"+url+"'>"+title+"</a>"+"    Readtimes:"+time+"<br>");
      document.getElementById("top").innerHTML+=content;
    }
  }, function (error) {
    console.log("error");
  });
</script>
