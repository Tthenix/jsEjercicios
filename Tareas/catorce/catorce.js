function palabra() {
    let awasasa = "AWSAWDWAWSWA";
    awasasa = awasasa.split("").reverse().join("");
    awasasa = awasasa.replaceAll('AWS', '');
    console.log(awasasa)
}
