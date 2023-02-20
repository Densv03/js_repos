function foo(color = 'rgb(254,254,254)', opacity = '1') {
  if (typeof opacity === "string" && isNaN(parseFloat(opacity))) {
    throw new Error("Opacity must be a number");
  }

  if (color === "" || color === "transparent") {
    return "transparent";
  }

  if (!isColorHex(color) && !isColorRgb(color) && color) {
    throw new Error("Color must be a hex or rgb value");
  }

  if (opacity.toString().includes(",")) {
    opacity = opacity.toString().replace(",", ".");
  }

  console.log(color);

  if (isColorRgb(color)) {
    var stringToPeplace = (", " + opacity).toString();
    return color.replace(")", stringToPeplace).replace("(", "a(");
  } else if (isColorHex(color)) {
    var hex = color.replace("#", "");
    var r;
    var g;
    var b;
    if (hex.length === 3) {
      r = parseInt(hex.substring(0, 1).repeat(2), 16).toString();
      g = parseInt(hex.substring(1, 2).repeat(2), 16).toString();
      b = parseInt(hex.substring(2, 3).repeat(2), 16).toString();
    } else if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16).toString();
      g = parseInt(hex.substring(2, 4), 16).toString();
      b = parseInt(hex.substring(4, 6), 16).toString();
    }
    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
  }
}

function isColorHex(color) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

function isColorRgb(color) {
  return /^rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\);?$/.test(color);
}


console.log(foo())