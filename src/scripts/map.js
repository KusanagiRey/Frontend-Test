ymaps.ready(init);
let center = [55.751360, 37.565462];

function init(){
    // Создание карты.
    let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: center,
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17,
        controls: []
    });
        
        myMap.balloon.open(center, {
            content: `
            <div class="balloon">
                <span class="balloon-H">Конгресс-парк Radisson Collection.</span><br>
                Москва. Кутузовский проспект 2/1, стр.1
            </div>
            `   
        }, {
            closeButton: false
        });
    }