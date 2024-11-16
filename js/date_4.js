function get_year(e, t) { 
  return e.toLocaleString(t || "EN", { year: "numeric" }).replace(/\D/gi, "") 
} 
function dtime_nums(e, t) { 
  var a = new Date; 
  a.setDate(a.getDate() + e + 1); 
  var n = ""; 
  a.getDate() < 10 && (n = "0"), n += a.getDate(); 
  var r = ""; 
  a.getMonth() + 1 < 10 && (r = "0"), r += a.getMonth() + 1, document.write(n + "." + r + "." + get_year(a, t)) 
}