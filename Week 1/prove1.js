    
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

    selectElem.addEventListener('change', changeTheme);

        function changeTheme() {
            let current = selectElem.value;
                if (current == 'dark') {
                document.body.style.backgroundColor = '#1e1e1e';
                document.body.style.color = '#ffffff';
        
                logo.src = 'byui-logo-white.png';
                } else {
                document.body.style.backgroundColor = '#ffffff';
                document.body.style.color = '#000000';
                logo.src = 'byui-logo-blue.webp';
                }
                    }