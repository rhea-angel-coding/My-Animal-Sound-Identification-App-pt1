function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier (put-teachable-machine-files-here)
}

function modelReady(){
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var tiger = 0;
var cow = 0;

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("result_label").innerHTML = 'Detec'
    }
    

}