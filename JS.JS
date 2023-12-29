document.addEventListener('DOMContentLoaded', function () {
    var TextInput = document.getElementById('TextInput');
    var Output = document.getElementById("Output");
    var ConvertButton = document.getElementById('ConvertButton');

    ConvertButton.addEventListener('click', function () {
        let Hash = 0;
        for (let i = 0; i < TextInput.value.length; i++) {
          const char = TextInput.value.charCodeAt(i);
          Hash += char;
          Hash += (Hash << 10);
          Hash ^= (Hash >>> 6);
        }
        Hash += (Hash << 3);
        Hash ^= (Hash >>> 11);
        Hash += (Hash << 15);
        Hash >>> 0;
        
        Output.value = Hash;
    });
});
