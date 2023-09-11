function calculateTriangleArea(){
    const  bageField = document.getElementById('triangle-bage')
    const bageValueText = bageField.value;
    const bage = parseFloat(bageValueText)
    console.log(bage);
  
    const heightField = document.getElementById('triangle-height')
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText)
    console.log(height);
  
    const area = 0.5 * bage * height;
    console.log(area);
  
    const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area;
  }
  
  
  function calculateRectangleArea(){
  
  const widthField = document.getElementById('rectangle-width')
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText)
  console.log(width);
  
  const lengthField = document.getElementById('rectangle-length')
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText)
  console.log(length);
  
  const area = width * length;
  
  const rectangleSpan = document.getElementById('rectangle-area')
  rectangleSpan.innerText= area;
  
  }


  function calculatePeraArea(){
    const  peraField = document.getElementById('pera-bage')
    const peraValueText = peraField.value;
    const pera = parseFloat(peraValueText)
    console.log(pera);
  
    const peraHeightField = document.getElementById('pera-height')
    const peraheightValueText = peraHeightField.value;
    const height = parseFloat(peraheightValueText)
    console.log(height);
  
    const area = pera * height;
    console.log(area);
  
    const areaSpan = document.getElementById('pera-area')
    areaSpan.innerText = area;
  }


  function calculateEllipseArea(){
    const  shortField = document.getElementById('ellipse-redious')
    const shortValueText = shortField.value;
    const short = parseFloat(shortValueText)
    console.log(short);
  
    const tallField = document.getElementById('ellipse-2nd-redious')
    const tallValueText = tallField.value;
    const tall = parseFloat(tallValueText)
    console.log(tall);
  
    const area = 3.1416 * short * tall;
    console.log(area);
  
    const areaSpan = document.getElementById('ellipse-area')
    areaSpan.innerText = area;
  }


  function calculatePentagonArea(){
    const  longField = document.getElementById('penta-bage')
    const longValueText = longField.value;
    const long = parseFloat(longValueText)
    console.log(long);
  
    const pentaField = document.getElementById('penta-height')
    const pentaValueText = pentaField.value;
    const penta = parseFloat(pentaValueText)
    console.log(penta);
  
    const area = 0.5 * long * penta;
    console.log(area);
  
    const areaSpan = document.getElementById('penta-area')
    areaSpan.innerText = area;
  }



  function calculateRhomboseArea(){
    const  rhomboseField = document.getElementById('lone')
    const rhomboseValueText = rhomboseField.value;
    const rhombose = parseFloat(rhomboseValueText)
    console.log(rhombose);
  
    const entaField = document.getElementById('lone')
    const entaValueText = entaField.value;
    const enta = parseFloat(entaValueText)
    console.log(enta);
  
    const area = 0.5 * rhombose * enta;
    console.log(area);
  
    const areaSpan = document.getElementById('pera-lone')
    areaSpan.innerText = area;
  }

  