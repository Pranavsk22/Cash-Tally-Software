function search_Date_bgl(){var e=document.getElementById("Date").value;e||(e=(new Date).toISOString().substr(0,10));document.getElementById("Date").value=e,fetchallrecords_bgl(new Date(e))}function formatDate_bgl(e){return`${("0"+e.getDate()).slice(-2)}/${("0"+(e.getMonth()+1)).slice(-2)}/${e.getFullYear()}`}function fetchS_NOOfPreviousDate_bgl(){fetchPreviousS_NO_bgl()}function fetchPreviousS_NO_bgl(){fetch("YOUR_URL").then((e=>e.json())).then((e=>{e.success&&void 0!==e.result.S_NO&&(document.getElementById("S_NO").value=e.result.S_NO+1,document.getElementById("S_NO").readOnly=!0)})).catch((e=>console.error("Error:",e)))}function fetchallrecords_bgl(e){var t=formatDate_bgl(e);fetch("YOUR_URL?date="+t).then((e=>e.json())).then((e=>{e.success?(fetchS_NOOfPreviousDate_bgl(),edit_bgl(),document.getElementById("OpeningBalance").value=e.result.OpeningBalance.toFixed(2),document.getElementById("Sales").value=e.result.Sales.toFixed(2),document.getElementById("OnlineSales").value=e.result.OnlineSales.toFixed(2),document.getElementById("GPay").value=e.result.GPay.toFixed(2),document.getElementById("Cheque").value=e.result.Cheque.toFixed(2),document.getElementById("CreditCard").value=e.result.CreditCard.toFixed(2),document.getElementById("Expenses").value=e.result.Expenses.toFixed(2),document.getElementById("SareeChit").value=e.result.SareeChit.toFixed(2),document.getElementById("Bank1").value=e.result.Bank1.toFixed(2),document.getElementById("Bank2").value=e.result.Bank2.toFixed(2),document.getElementById("Bank3").value=e.result.Bank3.toFixed(2),document.getElementById("Cash_2000").value=e.result.Cash_2000,document.getElementById("Cash_500").value=e.result.Cash_500,document.getElementById("Cash_200").value=e.result.Cash_200,document.getElementById("Cash_100").value=e.result.Cash_100,document.getElementById("Cash_50").value=e.result.Cash_50,document.getElementById("Cash_20").value=e.result.Cash_20,document.getElementById("Cash_10").value=e.result.Cash_10,document.getElementById("Cash_5").value=e.result.Cash_5,document.getElementById("Cash_2").value=e.result.Cash_2,document.getElementById("Cash_1").value=e.result.Cash_1,document.getElementById("Counter2").value=e.result.Counter2.toFixed(2),document.getElementById("Date").readOnly=!0,document.getElementById("searchbutton").style.display="none",document.getElementById("submitbutton").style.display="inline",calculateDailySummary_bgl()):"No record found for the provided date"===e.message?(alert("No record found for the provided date"),makereadonly_bgl()):"Multiple records found for the provided date"===e.message?(alert("Multiple records found for the provided date"),makereadonly_bgl()):console.error("Data fetch was not successful")})).catch((e=>console.error("Error:",e)))}function zoom_bgl(){document.body.style.zoom="100%"}function makereadonly_bgl(){document.getElementById("OpeningBalance").readOnly=!0,document.getElementById("Sales").readOnly=!0,document.getElementById("OnlineSales").readOnly=!0,document.getElementById("GPay").readOnly=!0,document.getElementById("Cheque").readOnly=!0,document.getElementById("CreditCard").readOnly=!0,document.getElementById("Expenses").readOnly=!0,document.getElementById("SareeChit").readOnly=!0,document.getElementById("Bank1").readOnly=!0,document.getElementById("Bank2").readOnly=!0,document.getElementById("Bank3").readOnly=!0,document.getElementById("Cash_2000").readOnly=!0,document.getElementById("Cash_500").readOnly=!0,document.getElementById("Cash_200").readOnly=!0,document.getElementById("Cash_100").readOnly=!0,document.getElementById("Cash_50").readOnly=!0,document.getElementById("Cash_20").readOnly=!0,document.getElementById("Cash_10").readOnly=!0,document.getElementById("Cash_5").readOnly=!0,document.getElementById("Cash_2").readOnly=!0,document.getElementById("Cash_1").readOnly=!0,document.getElementById("Counter2").readOnly=!0}function edit_bgl(){document.getElementById("OpeningBalance").readOnly=!1,document.getElementById("Sales").readOnly=!1,document.getElementById("OnlineSales").readOnly=!1,document.getElementById("GPay").readOnly=!1,document.getElementById("Cheque").readOnly=!1,document.getElementById("CreditCard").readOnly=!1,document.getElementById("Expenses").readOnly=!1,document.getElementById("SareeChit").readOnly=!1,document.getElementById("Bank1").readOnly=!1,document.getElementById("Bank2").readOnly=!1,document.getElementById("Bank3").readOnly=!1,document.getElementById("Cash_2000").readOnly=!1,document.getElementById("Cash_500").readOnly=!1,document.getElementById("Cash_200").readOnly=!1,document.getElementById("Cash_100").readOnly=!1,document.getElementById("Cash_50").readOnly=!1,document.getElementById("Cash_20").readOnly=!1,document.getElementById("Cash_10").readOnly=!1,document.getElementById("Cash_5").readOnly=!1,document.getElementById("Cash_2").readOnly=!1,document.getElementById("Cash_1").readOnly=!1,document.getElementById("Counter2").readOnly=!1}