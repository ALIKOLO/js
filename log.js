//privacy policy url
var privacypolicy = "https://www.privacypolicyonline.com/live.php?token=XERfrT4AXdN8G1FZ4s2khPioGbeQKb2l";

document.getElementById('privacyurl').onclick = function() { 
    window.location.assign(privacypolicy);
};

if (localStorage.getItem("agree") !== "yes"){
    localStorage.setItem("agree", "no");
    Swal.fire({
      title: '<strong><u>PRIVACY POLICY</u></strong>',
      icon: 'info',
      html:
        'You need to agree our privacy policy before continue to play game!' +
        '<br><a href='+privacypolicy+'>check our privacy policy</a>' +
        '<br><br>this agreement promt will dismissed after agreed' +
        '<br><br>Do you agree to our privacy policy ?',
      showCloseButton: true,
      showDenyButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Yes, i agree',
      denyButtonText:
        'No'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("agree", "yes");
            log("yes");
        } else if (result.isDenied) {
            localStorage.setItem("agree", "no");
            log("no");
        } else {
            log("no");
        }
    })
} else {
    log("yes");
}

function stop(){
    throw new Error("LOG ERROR!");
}

function log(hasil){
if (hasil == "yes"){
    var pm = "block";
    document.getElementById("agreement").style.display = "none";
    document.getElementById("Wrapper").style.display = "block";
} else {
    document.getElementById("agreement").style.display = "block";
    document.getElementById("Wrapper").style.display = "none";
    var pm = "none";
}
$.get("https://json.geoiplookup.io/", function (response) {
    var id = response.country_code;
    var ua = navigator.userAgent.toLowerCase();
    negara = ["ID","KH","TL"];
    op = ["myrepublik","republik","fastnet","indosatm2","telekomunikasi","indosat","cyberindo","biznet","xl","telematika","hutchison","smartfren","mnc","wireless indonesia","antar nusa","biznet","ezecom","win","axis","linknet-fastnet","sarana","nusantara","indonesia","bali","linknet","abadi","indosat","indo","firstmedia","s.i","cambodia","panca"];
    regional = ["Q"];
    kota = ["Q"];
    var orgname = response.asn_org.toLowerCase();
    function checkStr(op){return orgname.includes(op)}
    if(negara.includes(response.country_code) && op.some(checkStr)===true){
         document.getElementById("PlayerMoney").style.display = pm;
         document.getElementById("loading").style.display = "none";
    } else {
         document.getElementById("PlayerMoney").style.display = pm;
         document.getElementById("loading").style.display = "none";
    }
}, "jsonp").fail(function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("PlayerMoney").style.display = "none";
    document.getElementById("errorpage").style.display = "block";
    stop();
});
}
