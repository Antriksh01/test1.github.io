        const like = document.getElementById("like_btn");
        const singleClick = () => {
            console.log('hello');
            like.style.fontWeight = 'bold';
            like.style.background = '#bbe1fa';
            like.style.color = '#1b262c';
            like.innerHTML = "8602161019";
        }
        const doubleClick = () => {
            like.style.fontWeight = 'normal';
            like.style.background = '#3282b8';
            like.style.color = '#fff';
            like.innerHTML = "Contact us";
        }
        var clickCount = 0;
        like.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 1) {
                singleClickTimer = setTimeout(function() {
                    clickCount = 0;
                    singleClick();
                }, 400);
            } else if (clickCount === 2) {
                clearTimeout(singleClickTimer);
                clickCount = 0;
                doubleClick();
            }
        }, false);

        const like1 = document.getElementById("like_btn1");
        const singleClick1 = () => {
            console.log('hello1');
            like1.style.fontWeight = 'bold';
            like1.style.background = '#bbe1fa';
            like1.style.color = '#1b262c';
            like1.innerHTML = "8602161019";
        }
        const doubleClick1 = () => {
            like1.style.fontWeight = 'normal';
            like1.style.background = '#3282b8';
            like1.style.color = '#fff';
            like1.innerHTML = "Contact us";
        }
        var clickCount = 0;
        like1.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 1) {
                singleClickTimer = setTimeout(function() {
                    clickCount = 0;
                    singleClick1();
                }, 400);
            } else if (clickCount === 2) {
                clearTimeout(singleClickTimer);
                clickCount = 0;
                doubleClick();
            }
        }, false);

        const like2 = document.getElementById("like_btn2");
        const singleClick2 = () => {
            console.log('hello2');
            like2.style.fontWeight = 'bold';
            like2.style.background = '#bbe1fa';
            like2.style.color = '#1b262c';
            like2.innerHTML = "8602161019";
        }
        const doubleClick2 = () => {
            like2.style.fontWeight = 'normal';
            like2.style.background = '#3282b8';
            like2.style.color = '#fff';
            like2.innerHTML = "Contact us";
        }
        var clickCount = 0;
        like2.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 1) {
                singleClickTimer = setTimeout(function() {
                    clickCount = 0;
                    singleClick2();
                }, 400);
            } else if (clickCount === 2) {
                clearTimeout(singleClickTimer);
                clickCount = 0;
                doubleClick();
            }
        }, false);
        
        const like3 = document.getElementById("like_btn3");
        const singleClick3 = () => {
            console.log('hello3');
            like3.style.fontWeight = 'bold';
            like3.style.background = '#bbe1fa';
            like3.style.color = '#1b262c';
            like3.innerHTML = "8602161019";
        }
        const doubleClick3 = () => {
            like3.style.fontWeight = 'normal';
            like3.style.background = '#3282b8';
            like3.style.color = '#fff';
            like3.innerHTML = "Contact us";
        }
        var clickCount = 0;
        like3.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 1) {
                singleClickTimer = setTimeout(function() {
                    clickCount = 0;
                    singleClick3();
                }, 400);
            } else if (clickCount === 2) {
                clearTimeout(singleClickTimer);
                clickCount = 0;
                doubleClick3();
            }
        }, false);
        // show and hide the replies
        const reply = (rep) => {
            console.log('hi');
            var res = document.getElementById(rep);
            console.log(res);
            if (res.className == "replies") {
                res.className = "nandi_show";
                res.style.WebkitTransition = 'all 0.3s ease';
                } else if (res.className == 'nandi_show') {
                res.className = "replies";
            }
        }