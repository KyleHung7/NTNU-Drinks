
      var drinks = [
          { name: "紅茶", price: "$35", shop: "得正", remark: "No" },
          { name: "綠茶", price: "$35", shop: "得正", remark: "No" },
          { name: "春烏龍", price: "40", shop: "得正", remark: "No" },
          { name: "青烏龍", price: "$40", shop: "得正", remark: "No" },
          { name: "焙烏龍", price: "$40", shop: "得正", remark: "No" },
          { name: "檸檬春烏龍", price: "$55", shop: "得正", remark: "Fruit" },
          { name: "青梅春烏龍", price: "$60", shop: "得正", remark: "Fruit" },
          { name: "百香果綠茶", price: "$55", shop: "得正", remark: "Fruit" },
          { name: "香橙春烏龍", price: "$65", shop: "得正", remark: "Fruit" },
          { name: "甘蔗春烏龍", price: "$65", shop: "得正", remark: "Fruit" },
          { name: "芝士奶蓋春烏龍", price: "$60", shop: "得正", remark: "Milk" },
          { name: "芝士奶蓋焙烏龍", price: "$60", shop: "得正", remark: "Milk" },
          { name: "芝士奶蓋抹茶", price: "$55", shop: "得正", remark: "Milk" },
          { name: "奶茶", price: "$45", shop: "得正", remark: "Milk" },
          { name: "焙烏龍奶茶", price: "$55", shop: "得正", remark: "Milk" },
          { name: "珍珠奶茶", price: "$55", shop: "得正", remark: "Milk"&&"Bubble"},
          { name: "黃金珍珠奶綠", price: "$60", shop: "得正", remark: "Milk"&&"Bubble"},
          { name: "紅茶鮮奶", price: "$70", shop: "得正", remark: "Milk" },
          { name: "輕烏龍鮮奶", price: "$70", shop: "得正", remark: "Milk" },
          { name: "抹茶鮮奶", price: "$90", shop: "得正", remark: "Milk" },
          { name: "職人復古紅茶", price: "$30", shop: "小職人", remark: "No" },
          { name: "職人伯爵紅茶", price: "$30", shop: "小職人", remark: "No" },
          { name: "職人鐵觀音", price: "$30", shop: "小職人", remark: "No" },
          { name: "職人鮮奶茶", price: "$55", shop: "小職人", remark: "Milk" },
          { name: "伯爵鮮奶茶", price: "$55", shop: "小職人", remark: "Milk" },
          { name: "鐵觀音鮮奶茶", price: "$55", shop: "小職人", remark: "Milk" },
          { name: "皇牌鮮奶茶", price: "$55", shop: "小職人", remark: "Milk" },
          { name: "超濃鮮奶茶", price: "$60", shop: "小職人", remark: "Milk" },
          { name: "冬瓜檸檬", price: "$45", shop: "小職人", remark: "Fruit" },
          { name: "甘蔗青茶", price: "$60", shop: "小職人", remark: "Fruit" },
          { name: "柳丁綠茶", price: "$65", shop: "小職人", remark: "Fruit" },
          { name: "天使奶蓋紅", price: "$55", shop: "小職人", remark: "Milk" },
          { name: "珍珠鮮奶", price: "$90", shop: "小職人", remark: "Milk"&&"Bubble" },
          { name: "日月潭紅茶", price: "$25", shop: "天下佈武", remark: "No" },
          { name: "阿里山綠茶", price: "$25", shop: "天下佈武", remark: "No" },
          { name: "衫林溪烏龍茶", price: "$25", shop: "天下佈武", remark: "No" },
          { name: "頂級烏龍茶", price: "$50", shop: "天下佈武", remark: "No" },
          { name: "鮮奶紅茶", price: "$40", shop: "天下佈武", remark: "Milk" },
          { name: "鮮奶綠茶", price: "$40", shop: "天下佈武", remark: "Milk" },
          { name: "鮮奶烏龍茶", price: "$40", shop: "天下佈武", remark: "Milk" },
          { name: "檸檬紅茶", price: "$40", shop: "天下佈武", remark: "Fruit" },
          { name: "柳橙紅茶", price: "$40", shop: "天下佈武", remark: "Fruit" },
          { name: "蘋果紅茶", price: "$50", shop: "天下佈武", remark: "Fruit" },
          { name: "檸檬綠茶", price: "$40", shop: "天下佈武", remark: "Fruit" },
          { name: "柳橙綠茶", price: "$40", shop: "天下佈武", remark: "Fruit" },
          { name: "百香果綠茶", price: "$40", shop: "天下佈武", remark: "Fruit" },
          { name: "梅子綠茶", price: "$40", shop: "天下佈武", remark: "Fruit" },
          { name: "蘋果綠茶", price: "$50", shop: "天下佈武", remark: "Fruit" },
          { name: "檸檬烏龍茶", price: "$40", shop: "天下佈武", remark: "Fruit" },
          { name: "柳橙烏龍茶", price: "$40", shop: "天下佈武", remark: "Fruit" },
          { name: "蘋果烏龍茶", price: "$50", shop: "天下佈武", remark: "Fruit" },
          { name: "鮮奶紅茶", price: "$40", shop: "天下佈武", remark: "Milk" },
          { name: "鮮奶綠茶", price: "$40", shop: "天下佈武", remark: "Milk" },
          { name: "極濃鍋煮", price: "$65", shop: "十盛", remark: "Milk" },
          { name: "伯爵康提", price: "$65", shop: "十盛", remark: "Milk" },
          { name: "嵐山抹茶", price: "$69", shop: "十盛", remark: "Milk" },
          { name: "極上焙茶", price: "$69", shop: "十盛", remark: "Milk" },
          { name: "冬焙蕎麥", price: "$65", shop: "十盛", remark: "Milk" },
          { name: "秋韻金萱", price: "$65", shop: "十盛", remark: "Milk" },
          { name: "初春玉露", price: "$65", shop: "十盛", remark: "Milk" },
          { name: "十盛蕎麥", price: "$40", shop: "十盛", remark: "No" },
          { name: "琥珀紅玉", price: "$40", shop: "十盛", remark: "No" },
          { name: "芽心冬片", price: "$40", shop: "十盛", remark: "No" },
          { name: "玉露香片", price: "$40", shop: "十盛", remark: "No" },
          { name: "十盛蕎麥奶霜", price: "$60", shop: "十盛", remark: "Milk" },
          { name: "琥珀紅玉奶霜", price: "$60", shop: "十盛", remark: "Milk" },
          { name: "芽心冬片奶霜", price: "$60", shop: "十盛", remark: "Milk" },
          { name: "玉露香片奶霜", price: "$60", shop: "十盛", remark: "Milk" },
          { name: "金柚芽心冬片", price: "$65", shop: "十盛", remark: "Fruit" },
          { name: "荔枝果玉冰茶", price: "$65", shop: "十盛", remark: "Fruit" },
          { name: "鳳梨蕎麥冰茶", price: "$69", shop: "十盛", remark: "Fruit" },
          { name: "紅柚果玉冰茶", price: "$69", shop: "十盛", remark: "Fruit" },
          { name: "香檸紅玉冰茶", price: "$65", shop: "十盛", remark: "Fruit" },
          { name: "春橙玉露冰茶", price: "$65", shop: "十盛", remark: "Fruit" },

      ];

        function getRandomDrink() {
            var avoidBubble = document.getElementById("avoidBubble").checked;
            var avoidFruit = document.getElementById("avoidFruit").checked;
            var avoidMilk = document.getElementById("avoidMilk").checked;

            var filteredDrinks = drinks;

            if (avoidBubble) {
                filteredDrinks = filteredDrinks.filter(function(drink) {
                    return drink.remark !== "Bubble";
                });
            }
            if (avoidFruit) {
                filteredDrinks = filteredDrinks.filter(function(drink) {
                    return drink.remark !== "Fruit";
                });
            }
            if (avoidMilk) {
                filteredDrinks = filteredDrinks.filter(function(drink) {
                    return drink.remark !== "Milk";
                });
            }

            if (filteredDrinks.length > 0) {
                var randomIndex = Math.floor(Math.random() * filteredDrinks.length);
                var randomDrink = filteredDrinks[randomIndex];
                
                var additionalInfo1 = "";
                if (randomDrink.shop === "得正") {
                    additionalInfo1 = "Telephone: 02-2391-8746";
                }
                if (randomDrink.shop === "小職人") {
                    additionalInfo1 = "Telephone: 02-2366-1775";
                }
                if (randomDrink.shop === "十盛") {
                    additionalInfo1 = "Telephone: 02-2394-3188";
                }
                if (randomDrink.shop === "天下佈武") {
                    additionalInfo1 = "Telephone: 02-2366-1190";
                }
                var additionalInfo2 = "";
                if (randomDrink.shop === "得正") {
                    additionalInfo2= "Address: 106台北市大安區和平東路一段19-1號";
                }
                if (randomDrink.shop === "小職人") {
                    additionalInfo2 = "Address: 106台北市大安區師大路124號";
                }
                if (randomDrink.shop === "十盛") {
                    additionalInfo2 = "Address: 106台北市大安區和平東路一段19號";
                }
                if (randomDrink.shop === "天下佈武") {
                    additionalInfo2 ="Address: 106台北市大安區師大路50號";
                }
                // Update the HTML content with the random drink information

                document.getElementById("drinkName").innerText = randomDrink.name;
                document.getElementById("drinkDescription").innerText = `價格: ${randomDrink.price}, 店家名稱: ${randomDrink.shop}, 過敏原: ${randomDrink.remark}`;
                document.getElementById("drinkMoreInfo1").innerText = additionalInfo1;
                document.getElementById("drinkMoreInfo2").innerText = additionalInfo2;
                
            } else {
              document.getElementById("drinkName").innerText = "";
              document.getElementById("drinkDescription").innerText = "";
              document.getElementById("drinkMoreInfo1").innerText = "";
              document.getElementById("drinkMoreInfo2").innerText = "";
              document.getElementById("avoidBubble").checked = false;
              document.getElementById("avoidFruit").checked = false;
              document.getElementById("avoidMilk").checked = false;
        }
        }

        function clearDrink() {
            // Clear the displayed drink information
            document.getElementById("drinkName").innerText = "";
            document.getElementById("drinkDescription").innerText = "";
            document.getElementById("drinkMoreInfo1").innerText = "";
            document.getElementById("drinkMoreInfo2").innerText = "";
            document.getElementById("avoidBubble").checked = false;
            document.getElementById("avoidFruit").checked = false;
            document.getElementById("avoidMilk").checked = false;
        }
