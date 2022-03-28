function main() {
  operation("../params_data.xlsx");
}

function operation(dataPath){
   var operationType = 'multiply';
   var excelFile = Excel.Open(dataPath);
   var excelSheet = excelFile.SheetByTitle("Sheet1");
   var i = 1;
   var done = false;
   while(done === false) {
     i++;
     var operation = excelSheet.Cell("B", i).Value
     if(operation === operationType){
       var a  = parseInt(excelSheet.Cell("C", i).Value);
       var b  = parseInt(excelSheet.Cell("D", i).Value);
       Log.Message(a+"-"+b+"="+(a-b));
     } else if(!operation) {
       done=true;
     }
   }
}