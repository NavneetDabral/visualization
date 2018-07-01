var data=[50,100,150,200,250];
d3.select(".chart")
   .selectAll("div")
   .data(data)
   .enter()
   .append("div")
   .style("width",function(d){ return d+"px";})
   .text(function(d){ return d; });

d3.select(".chart1")
   .selectAll("div")
   .data(data)
   .enter()
   .append("div")
   .style("height",function(d){ return d+"px";})
   .text(function(d){ return d; });