
let verb = new family_t();
elements = Array("text_1s", "text_2s", "text_3s", "text_1p", "text_2p", "text_3p");
score = 0;
score_current = 0;
index = 0;
indexList = Array();

let color_white = "rgba(255, 255, 255, 0.7)";
let color_correct = "rgba(144, 238, 144, 0.7)";
let color_null = "rgba(144, 144, 238, 0.7)";
let color_wrong = "rgba(238, 144, 144, 0.7)";

function checkPresent()
{
    document.getElementById("suivante").disabled = false;
    score_current = 0;
    check("text_1s", verb.present.p1s);
    check("text_2s", verb.present.p2s);
    check("text_3s", verb.present.p3s);
    check("text_1p", verb.present.p1p);
    check("text_2p", verb.present.p2p);
    check("text_3p", verb.present.p3p);
    updateScore();
}

function showPresent()
{
    document.getElementById("suivante").disabled = false;
    document.getElementById("verifie").disabled = true;
    clear();
    document.getElementById("text_1s").value = verb.present.p1s;
    document.getElementById("text_2s").value = verb.present.p2s;
    document.getElementById("text_3s").value = verb.present.p3s;
    document.getElementById("text_1p").value = verb.present.p1p;
    document.getElementById("text_2p").value = verb.present.p2p;
    document.getElementById("text_3p").value = verb.present.p3p;
}

function init()
{
    totalNumber = roots_er.length + roots_irregulier.length;
    for (i = 0; i < totalNumber; i++)
        indexList.push(i);
    for (i = indexList.length - 1; i >= 0; i--)
    {
        newindex = Math.floor(Math.random() * i);
        swap = indexList[i];
        indexList[i] = indexList[newindex];
        indexList[newindex] = swap;
    }
    document.getElementById("verifie").disabled = false;
}

function load (root)
{
    verb.process_er(root);
    document.getElementById("infinitif").innerText = verb.infinitif;
}

function check (element, str)
{
    str1 = document.getElementById(element).value;
    str1 = str1.toLowerCase();
    if (str1 == str)
    {
        document.getElementById(element).style.backgroundColor = color_correct;
        score_current++;
    }
    else if (str1 == "")
        document.getElementById(element).style.backgroundColor = color_null;
    else
        document.getElementById(element).style.backgroundColor = color_wrong;
}

function clear()
{
    for (i = 0; i < elements.length; i++)
    {
        document.getElementById(elements[i]).style.backgroundColor = color_white;
        document.getElementById(elements[i]).value = "";
    }
}

function chooseRandom ()
{
    return indexList[index++];
}

function loadRandom()
{
    clear();
    load(chooseRandom());
    document.getElementById("suivante").disabled = true;
}

function updateScore()
{
    document.getElementById("score").innerText = score + score_current;
}

function showNext()
{
    score += score_current;
    loadRandom();
    document.getElementById("verifie").disabled = false;
    score_current = 0;
}