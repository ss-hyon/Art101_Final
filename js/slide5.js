/**
 * Author:    Yuwei Mao
 * Created:   Spring 2021
 *
 * Public Domain
 **/
$("#myw_button1").click(function(){
  var n1 = $("#myw_in1").val();
  if (n1==20){
    window.open("https://www.cdfa.ca.gov/Statistics/PDFs/2020_Exports_Publication.pdf");
  }else if (n1==19) {
    window.open("https://www.cdfa.ca.gov/Statistics/PDFs/AgExports2018-2019.pdf");
  }else if (n1==18){
    window.open("https://www.cdfa.ca.gov/Statistics/PDFs/2017-18AgExports.pdf");
  }else if (n1==17){
    window.open("https://www.cdfa.ca.gov/Statistics/PDFs/2017AgExports.pdf");
  }else if (n1==16){
    window.open("https://www.cdfa.ca.gov/Statistics/PDFs/AgExports2015-2016.pdf");
  }
})
