let far,cel;

function get()
{
    far=parseFloat(document.getElementById('far').value);
    cel=parseFloat(document.getElementById('cel').value);
}

function FtoC()
{
    get();
    let ccel = (far-32)*(5/9);
    alert(ccel);
}

function CtoF()
{
    get();
    let cfar = (9/5)*cel+32;
    alert(cfar);
}
