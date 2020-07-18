console.log("os version");{
    var OSName = "Unknown OS";
    if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows10";
    if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh8";
    if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux7";
    if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android9";
    if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS6";
    console.log(' OS name and version: ' + OSName);
  }
