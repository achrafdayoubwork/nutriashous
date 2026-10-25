// ---------- Translations ----------
// Static page text: English comes from the HTML, Arabic from this table.
const AR = {
  "nav.steps": "الخطوات",
  "nav.calc": "الحاسبة",
  "step1": "الخطوة 1 من 2",
  "step2": "الخطوة 2 من 2",
  "nav.meals": "مخطط الوجبات",
  "calc.title": "حاسبة السعرات الحرارية",
  "calc.intro": "تعتمد الحاسبة على معادلة ميفلين-سانت جيور، وهي الطريقة الأكثر استخدامًا لحساب احتياجك اليومي من السعرات.",
  "calc.sex": "الجنس",
  "calc.male": "ذكر",
  "calc.female": "أنثى",
  "calc.age": "العمر",
  "calc.height": "الطول",
  "calc.weight": "الوزن",
  "calc.units": "الوحدات:",
  "calc.weightUnit": "وحدة الوزن",
  "calc.heightUnit": "وحدة الطول",
  "unit.kg": "كغ",
  "unit.lb": "رطل",
  "unit.cm": "سم",
  "unit.ftin": "قدم / إنش",
  "unit.ft": "قدم",
  "unit.in": "إنش",
  "unit.feet": "قدم",
  "unit.inches": "إنش",
  "calc.activity": "مستوى النشاط",
  "act.1": "قليل الحركة: تمارين قليلة أو بدون تمارين",
  "act.2": "نشاط خفيف: تمارين 1–3 أيام في الأسبوع",
  "act.3": "نشاط متوسط: تمارين 3–5 أيام في الأسبوع",
  "act.4": "نشاط عالٍ: تمارين 6–7 أيام في الأسبوع",
  "act.5": "نشاط عالٍ جدًا: عمل بدني أو تمرين مرتين يوميًا",
  "calc.goal": "الهدف",
  "calc.keto": "نظام الأكل",
  "keto.no": "عادي (متوازن)",
  "keto.yes": "كيتو",
  "calc.ketoHint": "الكيتو: كربوهيدرات أقل من 50غ يوميًا (حوالي 30غ) والباقي من الدهون. استشر طبيبك أولًا إذا كنت تتناول أدوية السكري أو كنتِ حاملًا أو لديك مشاكل في الكلى.",
  "goal.lose": "خسارة الدهون",
  "goal.maintain": "تثبيت الوزن",
  "goal.gain": "بناء العضلات",
  "calc.submit": "احسب",
  "res.target": "احتياجك اليومي",
  "unit.kcal": "سعرة",
  "res.maint": "سعرات الثبات:",
  "res.bmr": "معدل الحرق الأساسي:",
  "macro.protein": "بروتين",
  "macro.carbs": "كربوهيدرات",
  "macro.fat": "دهون",
  "res.bmi": "مؤشر كتلة الجسم",
  "res.water": "الماء",
  "unit.lday": "لتر يوميًا",
  "res.sources": "مصادر الحساب",
  "src.energy": "السعرات: معادلة ميفلين-سانت جيور (Mifflin وآخرون، المجلة الأمريكية للتغذية السريرية، 1990)، مضروبة في مستوى النشاط.",
  "src.protein": "البروتين: الجمعية الدولية للتغذية الرياضية (2017): 1.4–2.0غ لكل كغ لمن يمارس الرياضة. لمن مؤشر كتلة جسمه فوق 25 يُحسب على الوزن عند مؤشر 25.",
  "src.amdr": "توزيع المغذيات: نطاقات معهد الطب الأمريكي: بروتين 10–35٪، دهون 20–35٪، كربوهيدرات 45–65٪ من السعرات.",
  "src.bmi": "مؤشر كتلة الجسم: تصنيف منظمة الصحة العالمية (18.5 / 25 / 30).",
  "src.water": "الماء: الأكاديميات الوطنية الأمريكية (3.7 لتر للرجال و2.7 لتر للنساء من الماء الكلي، نحو 80٪ منه من المشروبات).",
  "src.keto": "الكيتو: أقل من 50غ كربوهيدرات يوميًا.",
  "res.disclaimer": "هذه الأرقام تقديرية. استشر طبيبًا أو أخصائي تغذية قبل أي تغيير كبير في نظامك الغذائي.",
  "meals.title": "مخطط الوجبات الذكي",
  "meals.intro": "بناءً على نتائجك في الخطوة 1، أجب عن بضعة أسئلة سريعة واحصل على خطة وجبات لـ 7 أيام، بوجبات مختلفة كل يوم، تناسب سعراتك واحتياجك من البروتين والكربوهيدرات والدهون، والأطعمة التي تأكلها أو تتجنبها.",
  "footer.built": "صُمّم لأكل صحي كل يوم.",
  "footer.note": "المعلومات في هذا الموقع للتثقيف العام وليست نصيحة طبية.",
  "tabbar.label": "التنقل في التطبيق",
  "tabbar.calc": "1. الحاسبة",
  "tabbar.meals": "2. الوجبات",
  "fb.open": "اترك ملاحظاتك",
  "fb.openTitle": "اترك ملاحظاتك (اسحب للتحريك)",
  "fb.title": "شاركنا رأيك",
  "fb.close": "إغلاق",
  "fb.rating": "ما رأيك في الموقع؟",
  "fb.r1": "سيئ",
  "fb.r2": "ليس جيدًا",
  "fb.r3": "مقبول",
  "fb.r4": "جيد",
  "fb.r5": "رائع",
  "fb.message": "رسالتك",
  "fb.placeholder": "ما الذي يجب أن نضيفه أو نحسّنه؟",
  "fb.email": "البريد الإلكتروني <span class=\"muted\">(اختياري، إن أردت ردًا)</span>",
  "fb.send": "أرسل",
  "fb.thanks": "<strong>شكرًا لك!</strong><br />ملاحظاتك تساعدنا على تحسين NutriASHous.",
  "fb.again": "أرسل ملاحظة أخرى",
};

// Text the script generates, in both languages
const STR = {
  en: {
    pageTitle: "NutriASHous — Diet & Health",
    units: { kg: "(kg)", lb: "(lb)", cm: "(cm)", ft: "(ft + in)" },
    step: {
      next: "Next: plan my meals →",
      nextLocked: "Finish step 1 to continue",
      calcHint: "Enter your age, height and weight, then press Calculate to unlock step 2.",
      lockedTitle: "Step 2 is locked",
      lockedText: "Finish step 1 first: enter your age, height and weight, then press Calculate. Your meal plan is built from those results.",
      lockedBtn: "Go to step 1",
    },
    g: "g",
    kcal: "kcal",
    bmi: { under: "Underweight", healthy: "Healthy", over: "Overweight", obese: "Obese" },
    goal: { lose: "fat loss", maintain: "maintenance", gain: "muscle gain" },
    macroShort: { p: "P", c: "C", f: "F" },
    planner: {
      context: (tg, goal, note) =>
        `Your daily targets: <strong>${tg.calories} kcal</strong> · Protein ${tg.protein}g · Carbs ${tg.carbs}g · Fat ${tg.fat}g${note} · Goal: <strong>${goal}</strong> · <a href="#calculator">change in the calculator</a>`,
      yourAnswers: "Your answers",
      editHint: "Click any answer to change it.",
      mix: "A mix",
      sep: ", ",
      short: { meals: "Meals per day", diet: "Diet", allergies: "Allergies", dislikes: "Foods to avoid", time: "Cooking time", cuisine: "Cuisines", budget: "Budget" },
      ketoNote: " (keto split)",
      addonsTitle: "Top-ups to reach your targets",
      addonsHint: "Add these to any meal or have them on the side.",
      match: {
        title: "Fits your answers:",
        allergy: "Safe for your allergies",
        avoid: "Nothing you avoid",
        quick: (m) => `Ready in ${m} min or less`,
        cheap: "Budget-friendly",
        keto: "Keto",
        names: { time: "cooking time", keto: "keto", cuisine: "cuisines", budget: "budget" },
        relaxed: (names) => `Couldn't also match your ${names} answer for this meal: nothing fits it together with your other answers.`,
      },
      fitGood: "✓ This plan matches your daily calories and macros.",
      fitClose: "This is the closest match to your targets that respects all your answers. Items marked ⚠ are outside the target range.",
      count: (n, total) => `Question ${n} of ${total}`,
      back: "Back",
      next: "Next",
      build: "Build my plan",
      q: {
        meals: {
          q: "How many meals do you eat in a day?",
          hint: "Count snacks too. Your calories are split across them. With one meal a day you get a main dish, a second plate and a side to eat together in one sitting. OMAD isn't right for everyone: check with your doctor if you have diabetes, are pregnant, or have had an eating disorder.",
          opts: { 1: "1 meal (OMAD)", 2: "2 meals", 3: "3 meals", 4: "4 meals", 5: "5 meals", 6: "6 meals" },
        },
        diet: {
          q: "Do you follow a specific diet?",
          hint: "Only meals that fit it will be suggested.",
          opts: { any: "No, I eat everything", vegetarian: "Vegetarian", vegan: "Vegan", pescatarian: "Pescatarian (fish, no meat)" },
        },
allergies: {
          q: "Do you have any food allergies or intolerances?",
          hint: "Select all that apply. Meals containing them will never be suggested.",
          none: "No allergies",
          opts: { gluten: "Gluten", dairy: "Dairy / lactose", egg: "Eggs", nuts: "Tree nuts", peanut: "Peanuts", soy: "Soy", fish: "Fish", shellfish: "Shellfish", sesame: "Sesame" },
        },
        dislikes: {
          q: "Are there foods you don't eat or don't like?",
          hint: "Select any that apply.",
          none: "Nothing, I eat it all",
          opts: { meat: "Red meat", poultry: "Chicken & turkey", seafood: "Fish & seafood", egg: "Eggs", mushroom: "Mushrooms", spicy: "Spicy food", avocado: "Avocado", legume: "Beans & lentils" },
        },
        time: {
          q: "How much time can you spend cooking a meal?",
          hint: "Quicker meals are picked first.",
          opts: { 15: "15 minutes or less", 30: "Up to 30 minutes", any: "I enjoy cooking, take your time" },
        },
        cuisine: {
          q: "Which cuisines do you enjoy?",
          hint: "Pick your favourites, or leave empty for a mix.",
          opts: { me: "Middle Eastern", med: "Mediterranean", asian: "Asian", west: "Western", mex: "Mexican" },
        },
        budget: {
          q: "What's your food budget?",
          hint: "Budget-friendly favours cheaper staples like eggs, beans and chicken.",
          opts: { budget: "Budget-friendly", flexible: "Flexible" },
        },
      },
      title: "Your 7-day meal plan",
      video: "Watch how to make it on YouTube",
      ingTitle: (s) => `Ingredients for your portion (×${s}):`,
      toTaste: "to taste",
      dayLabel: (n) => `Day ${n}`,
      weekFit: (n) => `${n} of 7 days on target`,
      weekTitle: "Your week at a glance",
      weekHint: "Every day uses different meals. Tap a day to see its recipes, portions and totals.",
      repeatBadge: "repeats",
      repeatTitle: "This recipe also appears on another day",
      repeatNote: "Only a few recipes fit all your answers for some meals, so a few repeat during the week (marked 🔁). Loosen an answer such as cuisine or cooking time for more variety.",
      building: "Preparing your 7-day plan…",      summary: (n, kcal, goal) => `${n === 1 ? "1 meal" : `${n} meals`} · ${kcal} kcal · ${goal}`,
      avoiding: "Avoiding:",
      slot: { omadMain: "Your one meal: main dish", omadSecond: "Your one meal: second plate", omadSide: "Your one meal: side", breakfast: "Breakfast", snackAM: "Morning snack", lunch: "Lunch", snackPM: "Afternoon snack", dinner: "Dinner", snackEve: "Evening snack" },
      minutes: (m) => (m ? `${m} min` : "No cooking"),
      portion: (s) => `Portion ×${s}`,
      portionHint: "Scale the ingredient amounts by this number.",
      others: "Other options:",
      noMatch: "Nothing in our recipe library fits all your answers for this meal. Try removing something from your avoid list.",
      totals: "Day total vs. your target",
      kcalLabel: "Calories",
      protein: "Protein",
      carbs: "Carbs",
      fat: "Fat",
      regenerate: "New suggestions",
      edit: "Change my answers",
      needCalc: "Fill in the calculator above to get your calorie target first.",
    },
    sending: "Sending…",
    send: "Send feedback",
    fbError: "Your feedback couldn't be sent. Check your connection and try again.",
  },
  ar: {
    pageTitle: "NutriASHous — الحمية والصحة",
    units: { kg: "(كغ)", lb: "(رطل)", cm: "(سم)", ft: "(قدم + إنش)" },
    step: {
      next: "التالي: خطّط وجباتي ←",
      nextLocked: "أكمل الخطوة 1 للمتابعة",
      calcHint: "أدخل عمرك وطولك ووزنك، ثم اضغط «احسب» لفتح الخطوة 2.",
      lockedTitle: "الخطوة 2 مقفلة",
      lockedText: "أكمل الخطوة 1 أولًا: أدخل عمرك وطولك ووزنك ثم اضغط «احسب». تُبنى خطة وجباتك على هذه النتائج.",
      lockedBtn: "اذهب إلى الخطوة 1",
    },
    g: "غ",
    kcal: "سعرة",
    bmi: { under: "نقص في الوزن", healthy: "وزن صحي", over: "زيادة في الوزن", obese: "سمنة" },
    goal: { lose: "خسارة الدهون", maintain: "تثبيت الوزن", gain: "بناء العضلات" },
    macroShort: { p: "بروتين", c: "كربوهيدرات", f: "دهون" },
    planner: {
      context: (tg, goal, note) =>
        `أهدافك اليومية: <strong>${tg.calories} سعرة</strong> · بروتين ${tg.protein}غ · كربوهيدرات ${tg.carbs}غ · دهون ${tg.fat}غ${note} · الهدف: <strong>${goal}</strong> · <a href="#calculator">عدّلها من الحاسبة</a>`,
      yourAnswers: "إجاباتك",
      editHint: "اضغط على أي إجابة لتعديلها.",
      mix: "مزيج متنوع",
      sep: "، ",
      short: { meals: "عدد الوجبات", diet: "النظام الغذائي", allergies: "الحساسية", dislikes: "أطعمة تتجنبها", time: "وقت الطبخ", cuisine: "المطابخ", budget: "الميزانية" },
      ketoNote: " (توزيع كيتو)",
      addonsTitle: "إضافات للوصول إلى أهدافك",
      addonsHint: "أضفها إلى أي وجبة أو تناولها كطبق جانبي.",
      match: {
        title: "تناسب إجاباتك:",
        allergy: "آمنة لحساسيتك",
        avoid: "بدون ما تتجنبه",
        quick: (m) => `جاهزة خلال ${m} دقيقة أو أقل`,
        cheap: "اقتصادية",
        keto: "كيتو",
        names: { time: "وقت الطبخ", keto: "الكيتو", cuisine: "المطبخ", budget: "الميزانية" },
        relaxed: (names) => `لم نتمكن من مطابقة إجابتك عن ${names} لهذه الوجبة، إذ لا توجد وجبة تناسبها مع باقي إجاباتك.`,
      },
      fitGood: "✓ هذه الخطة تطابق سعراتك ومغذياتك اليومية.",
      fitClose: "هذه أقرب خطة لأهدافك تحترم كل إجاباتك. العناصر المعلّمة بـ ⚠ خارج النطاق المستهدف.",
      count: (n, total) => `السؤال ${n} من ${total}`,
      back: "السابق",
      next: "التالي",
      build: "أنشئ خطتي",
      q: {
        meals: {
          q: "كم وجبة تتناول في اليوم؟",
          hint: "احسب الوجبات الخفيفة أيضًا. ستُوزّع سعراتك عليها. مع الوجبة الواحدة ستحصل على طبق رئيسي وطبق ثانٍ وطبق جانبي تأكلها معًا في جلسة واحدة. نظام الوجبة الواحدة (OMAD) لا يناسب الجميع: استشر طبيبك إذا كنت مصابًا بالسكري أو كنتِ حاملًا أو عانيت سابقًا من اضطرابات الأكل.",
          opts: { 1: "وجبة واحدة (OMAD)", 2: "وجبتان", 3: "3 وجبات", 4: "4 وجبات", 5: "5 وجبات", 6: "6 وجبات" },
        },
        diet: {
          q: "هل تتبع نظامًا غذائيًا معيّنًا؟",
          hint: "سنقترح فقط الوجبات التي تناسبه.",
          opts: { any: "لا، آكل كل شيء", vegetarian: "نباتي", vegan: "نباتي صارم (فيغن)", pescatarian: "نباتي ويأكل السمك" },
        },
allergies: {
          q: "هل لديك حساسية أو عدم تحمّل لأي طعام؟",
          hint: "اختر كل ما ينطبق. لن نقترح أبدًا وجبات تحتوي عليها.",
          none: "لا توجد حساسية",
          opts: { gluten: "الغلوتين", dairy: "الألبان / اللاكتوز", egg: "البيض", nuts: "المكسرات", peanut: "الفول السوداني", soy: "الصويا", fish: "السمك", shellfish: "القشريات (روبيان، سلطعون)", sesame: "السمسم" },
        },
        dislikes: {
          q: "هل هناك أطعمة لا تأكلها أو لا تحبها؟",
          hint: "اختر كل ما ينطبق.",
          none: "لا شيء، آكل كل شيء",
          opts: { meat: "اللحم الأحمر", poultry: "الدجاج والديك الرومي", seafood: "السمك والمأكولات البحرية", egg: "البيض", mushroom: "الفطر", spicy: "الطعام الحار", avocado: "الأفوكادو", legume: "البقوليات والعدس" },
        },
        time: {
          q: "كم من الوقت يمكنك قضاؤه في تحضير الوجبة؟",
          hint: "سنختار الوجبات الأسرع أولًا.",
          opts: { 15: "15 دقيقة أو أقل", 30: "حتى 30 دقيقة", any: "أستمتع بالطبخ، لا مشكلة في الوقت" },
        },
        cuisine: {
          q: "ما المطابخ التي تحبها؟",
          hint: "اختر المفضلة لديك، أو اتركها فارغة لمزيج متنوع.",
          opts: { me: "شرق أوسطي", med: "متوسطي", asian: "آسيوي", west: "غربي", mex: "مكسيكي" },
        },
        budget: {
          q: "ما ميزانيتك للطعام؟",
          hint: "الميزانية الاقتصادية تفضّل المكونات الأرخص مثل البيض والبقوليات والدجاج.",
          opts: { budget: "اقتصادية", flexible: "مرنة" },
        },
      },
      title: "خطة وجباتك لـ 7 أيام",
      video: "شاهد طريقة التحضير على يوتيوب",
      ingTitle: (s) => `المقادير لحصتك (×${s}):`,
      toTaste: "حسب الرغبة",
      dayLabel: (n) => `اليوم ${n}`,
      weekFit: (n) => `${n} من 7 أيام مطابقة للهدف`,
      weekTitle: "نظرة على أسبوعك",
      weekHint: "كل يوم بوجبات مختلفة. اضغط على أي يوم لترى وصفاته وحصصه وإجمالياته.",
      repeatBadge: "مكررة",
      repeatTitle: "هذه الوصفة موجودة أيضًا في يوم آخر",
      repeatNote: "عدد قليل فقط من الوصفات يناسب كل إجاباتك لبعض الوجبات، لذلك تتكرر بعضها خلال الأسبوع (معلّمة بـ 🔁). خفّف إحدى الإجابات مثل المطبخ أو وقت الطبخ للحصول على تنوع أكبر.",
      building: "جارٍ تجهيز خطة الأيام السبعة…",      summary: (n, kcal, goal) => `${{ 1: "وجبة واحدة", 2: "وجبتان" }[n] || `${n} وجبات`} · ${kcal} سعرة · ${goal}`,
      avoiding: "نتجنّب:",
      slot: { omadMain: "وجبتك الواحدة: الطبق الرئيسي", omadSecond: "وجبتك الواحدة: الطبق الثاني", omadSide: "وجبتك الواحدة: طبق جانبي", breakfast: "الفطور", snackAM: "وجبة خفيفة صباحية", lunch: "الغداء", snackPM: "وجبة خفيفة بعد الظهر", dinner: "العشاء", snackEve: "وجبة خفيفة مسائية" },
      minutes: (m) => (m ? `${m} دقيقة` : "بدون طبخ"),
      portion: (s) => `حجم الحصة ×${s}`,
      portionHint: "اضرب كميات المكونات في هذا الرقم.",
      others: "خيارات أخرى:",
      noMatch: "لا توجد وصفة في مكتبتنا تناسب كل إجاباتك لهذه الوجبة. جرّب إزالة شيء من قائمة ما تتجنّبه.",
      totals: "إجمالي اليوم مقارنةً بهدفك",
      kcalLabel: "السعرات",
      protein: "البروتين",
      carbs: "الكربوهيدرات",
      fat: "الدهون",
      regenerate: "اقتراحات جديدة",
      edit: "غيّر إجاباتي",
      needCalc: "املأ الحاسبة في الأعلى أولًا لمعرفة هدف سعراتك.",
    },
    sending: "جارٍ الإرسال…",
    send: "أرسل",
    fbError: "تعذّر إرسال ملاحظاتك. تحقق من اتصالك وحاول مرة أخرى.",
  },
};

let lang = "en";
const t = (key) => STR[lang][key];
const fmt = (n) => n.toLocaleString("en-US");

// ---------- Calorie & macro calculator ----------
// Sources: Mifflin et al., Am J Clin Nutr 1990 (energy); ISSN position stand on protein, Jäger et al.
// 2017 (1.4–2.0 g/kg for people who exercise, more while dieting); Institute of Medicine AMDRs
// (protein 10–35%, fat 20–35%, carbs 45–65% of calories); WHO BMI cut-offs; National Academies
// water intakes (3.7 L men / 2.7 L women total water, about 80% of it from drinks).
const GOAL_ADJUST = { lose: -500, maintain: 0, gain: 300 }; // −500 kcal ≈ 0.5 kg a week
const PROTEIN_PER_KG = {
  active: { lose: 2.0, maintain: 1.6, gain: 1.8 }, // light activity or more
  sedentary: { lose: 1.6, maintain: 1.2, gain: 1.6 },
};
const PROTEIN_MAX_SHARE = 0.35; // AMDR upper limit for protein
const FAT_SHARE = 0.27; // 27% of calories from fat (AMDR 20–35%)
const WATER_LITRES = { male: 3.0, female: 2.2 }; // from drinks; food supplies the rest

function bmiCategory(bmi) {
  if (bmi < 18.5) return ["under", "warn"];
  if (bmi < 25) return ["healthy", ""];
  if (bmi < 30) return ["over", "warn"];
  return ["obese", "bad"];
}

// ---------- Units: kg ↔ lb and cm ↔ ft/in. Everything is calculated in kg and cm. ----------
const LB_PER_KG = 2.20462;
const CM_PER_IN = 2.54;
const round1 = (n) => Math.round(n * 10) / 10;
const units = { w: "kg", h: "cm" };
try {
  Object.assign(units, JSON.parse(localStorage.getItem("nf-units")) || {});
} catch {
  /* metric by default */
}
const el = (id) => document.getElementById(id);

function cmToFtIn(cm) {
  let ft = Math.floor(cm / CM_PER_IN / 12);
  let inch = Math.round(cm / CM_PER_IN - ft * 12);
  if (inch === 12) [ft, inch] = [ft + 1, 0];
  return [ft, inch];
}

// The inputs the visitor is actually typing into for each unit
function measureFields() {
  return units.h === "cm" ? [el("age"), el("height"), el("weight")] : [el("age"), el("height-ft"), el("weight")];
}

// Show/hide the right inputs, ranges and labels for the chosen units
function applyUnitsUI() {
  const U = t("units");
  const w = el("weight");
  Object.assign(w, units.w === "lb" ? { min: 77, max: 660, placeholder: "165" } : { min: 35, max: 300, placeholder: "75" });
  el("weight-unit").textContent = U[units.w];
  const metric = units.h === "cm";
  el("height").hidden = !metric;
  el("height").disabled = !metric;
  el("height").required = metric;
  el("height-ftin").hidden = metric;
  el("height-ft").disabled = el("height-in").disabled = metric;
  el("height-ft").required = !metric;
  el("height-label").htmlFor = metric ? "height" : "height-ft";
  el("height-unit").textContent = U[units.h];
  el("height-field").classList.toggle("is-ftin", !metric);
  document.querySelectorAll(".unit-toggle [data-unit]").forEach((btn) => {
    btn.setAttribute("aria-pressed", units[btn.dataset.unit] === btn.dataset.val);
  });
}

// Put kg/cm values into the inputs in the visitor's units
function showMeasures(heightCm, weightKg) {
  el("weight").value = units.w === "lb" ? round1(weightKg * LB_PER_KG) : weightKg;
  if (units.h === "cm") el("height").value = Math.round(heightCm);
  else [el("height-ft").value, el("height-in").value] = cmToFtIn(heightCm);
}

// Switching units converts whatever was already typed
function setUnit(kind, value) {
  if (units[kind] === value) return;
  if (kind === "w" && el("weight").value) {
    const v = Number(el("weight").value);
    el("weight").value = value === "lb" ? round1(v * LB_PER_KG) : round1(v / LB_PER_KG);
  }
  if (kind === "h") {
    if (value === "ft" && el("height").value) {
      [el("height-ft").value, el("height-in").value] = cmToFtIn(Number(el("height").value));
    } else if (value === "cm" && el("height-ft").value) {
      el("height").value = Math.round((Number(el("height-ft").value) * 12 + Number(el("height-in").value || 0)) * CM_PER_IN);
    }
  }
  units[kind] = value;
  try {
    localStorage.setItem("nf-units", JSON.stringify(units));
  } catch {
    /* units just won't be remembered */
  }
  applyUnitsUI();
  calculate();
}

document.querySelectorAll(".unit-toggle [data-unit]").forEach((btn) =>
  btn.addEventListener("click", () => setUnit(btn.dataset.unit, btn.dataset.val))
);

function readInputs() {
  const fields = measureFields();
  const inches = el("height-in");
  if (fields.some((f) => !f.value || !f.checkValidity())) return null; // empty or out of range
  if (units.h === "ft" && !inches.checkValidity()) return null;
  const [age, heightVal, weightVal] = fields.map((f) => Number(f.value));
  const height = units.h === "cm" ? heightVal : round1((heightVal * 12 + Number(inches.value || 0)) * CM_PER_IN);
  const weight = units.w === "lb" ? round1(weightVal / LB_PER_KG) : weightVal;
  return {
    sex: document.querySelector('input[name="sex"]:checked').value,
    goal: document.querySelector('input[name="goal"]:checked').value,
    activity: Number(document.getElementById("activity").value),
    keto: document.querySelector('input[name="keto"]:checked').value === "yes",
    age,
    height,
    weight,
  };
}

// Daily calorie and macro targets for a given goal
function targetsFor(inputs, goal) {
  const { sex, age, height, weight, activity } = inputs;
  // Mifflin–St Jeor
  const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === "male" ? 5 : -161);
  const tdee = bmr * activity;
  const minCalories = sex === "male" ? 1500 : 1200;
  const calories = Math.max(Math.round(tdee + GOAL_ADJUST[goal]), minCalories);

  // Protein per kg of body weight, but for BMI over 25 per kg of the weight at BMI 25, so a
  // heavier body doesn't get an unrealistic amount; never more than 35% of calories
  const referenceWeight = Math.min(weight, 25 * (height / 100) ** 2);
  const perKg = PROTEIN_PER_KG[activity >= 1.375 ? "active" : "sedentary"][goal];
  const protein = Math.min(Math.round(referenceWeight * perKg), Math.round((calories * PROTEIN_MAX_SHARE) / 4));
  if (inputs.keto) {
    // Keto: about 30 g carbs a day (always under 50 g), protein unchanged, the rest from fat
    const carbs = Math.min(30, Math.round((calories * 0.05) / 4));
    const fat = Math.round((calories - protein * 4 - carbs * 4) / 9);
    return { bmr, tdee, calories, protein, carbs, fat };
  }
  const fat = Math.round((calories * FAT_SHARE) / 9);
  const carbs = Math.max(Math.round((calories - protein * 4 - fat * 9) / 4), 0);
  return { bmr, tdee, calories, protein, carbs, fat };
}

let inputs = null;

function resetResults() {
  ["r-calories", "r-tdee", "r-bmr", "r-protein", "r-carbs", "r-fat", "r-bmi", "r-water"].forEach(
    (id) => (document.getElementById(id).textContent = "—")
  );
  document.getElementById("r-bmi-cat").hidden = true;
  ["bar-protein", "bar-carbs", "bar-fat"].forEach((id) => (document.getElementById(id).style.width = "0"));
}

function calculate() {
  const next = readInputs();
  if (!next) {
    // Before step 1 is finished, show empty results; after, keep the last valid ones while typing
    if (!step1Done) {
      inputs = null;
      resetResults();
    }
    return;
  }
  inputs = next;
  el("keto-note").hidden = !inputs.keto;
  if (step1Done) saveStep1();

  const { bmr, tdee, calories, protein, carbs, fat } = targetsFor(inputs, inputs.goal);
  const { weight, height, activity, sex } = inputs;

  const bmi = weight / (height / 100) ** 2;
  const [cat, catClass] = bmiCategory(bmi);
  const water = (WATER_LITRES[sex] + (activity >= 1.55 ? 0.5 : 0)).toFixed(1); // more when active

  document.getElementById("r-calories").textContent = fmt(calories);
  document.getElementById("r-tdee").textContent = fmt(Math.round(tdee));
  document.getElementById("r-bmr").textContent = fmt(Math.round(bmr));
  document.getElementById("r-protein").textContent = `${protein}${t("g")}`;
  document.getElementById("r-carbs").textContent = `${carbs}${t("g")}`;
  document.getElementById("r-fat").textContent = `${fat}${t("g")}`;
  document.getElementById("r-bmi").textContent = bmi.toFixed(1);
  document.getElementById("r-water").textContent = water;

  const tag = document.getElementById("r-bmi-cat");
  tag.textContent = t("bmi")[cat];
  tag.className = `tag ${catClass}`;
  tag.hidden = false;

  const total = protein * 4 + carbs * 4 + fat * 9;
  document.getElementById("bar-protein").style.width = `${((protein * 4) / total) * 100}%`;
  document.getElementById("bar-carbs").style.width = `${((carbs * 4) / total) * 100}%`;
  document.getElementById("bar-fat").style.width = `${((fat * 9) / total) * 100}%`;

  // Keep the meal planner in sync with the calculator
  renderPlanner();
}

// ---------- Smart meal planner ----------
// Recipe library. Per base serving: k = kcal, p/c/f = grams protein/carbs/fat, t = minutes,
// cu = cuisine, $ = cost (1 cheap – 3 pricey), g = allergens and food groups it contains.
// s = meal type: b breakfast, l lunch, d dinner, s snack. n/i = [English, Arabic] name/ingredients.
const RECIPES = [
  // Breakfast
  { id: "b1", s: "b", e: "🍳", k: 420, p: 22, c: 38, f: 20, t: 20, cu: "me", $: 1, g: ["egg", "gluten"],
    n: ["Shakshuka with whole-wheat pita", "شكشوكة مع خبز أسمر"],
    i: ["2 eggs, tomatoes, peppers, onion, cumin, 1 whole-wheat pita", "بيضتان، طماطم، فلفل، بصل، كمون، رغيف خبز أسمر"] },
  { id: "b2", s: "b", e: "🫘", k: 380, p: 18, c: 48, f: 12, t: 10, cu: "me", $: 1, g: ["legume", "gluten"],
    n: ["Ful medames with olive oil", "فول مدمس بزيت الزيتون"],
    i: ["Fava beans, olive oil, lemon, garlic, cucumber, tomato, 1 small pita", "فول، زيت زيتون، ليمون، ثوم، خيار، طماطم، رغيف صغير"] },
  { id: "b3", s: "b", e: "🥣", k: 410, p: 16, c: 58, f: 12, t: 5, cu: "west", $: 1, g: ["gluten", "dairy"],
    n: ["Overnight oats with berries", "شوفان منقوع ليلًا بالتوت"],
    i: ["60g oats, 200ml milk, chia seeds, berries, cinnamon", "60غ شوفان، 200مل حليب، بذور شيا، توت، قرفة"] },
  { id: "b4", s: "b", e: "🍯", k: 360, p: 24, c: 36, f: 14, t: 5, cu: "med", $: 2, g: ["dairy", "nuts", "honey"],
    n: ["Greek yogurt with walnuts & honey", "زبادي يوناني مع الجوز والعسل"],
    i: ["200g Greek yogurt, walnuts, honey, fresh fruit", "200غ زبادي يوناني، جوز، عسل، فاكهة طازجة"] },
  { id: "b5", s: "b", e: "🍳", k: 340, p: 26, c: 22, f: 16, t: 15, cu: "west", $: 1, g: ["egg", "gluten"],
    n: ["Veggie omelette with toast", "أومليت بالخضار مع توست"],
    i: ["2 eggs + 2 egg whites, spinach, peppers, onion, 1 slice whole-grain toast", "بيضتان + بياض بيضتين، سبانخ، فلفل، بصل، شريحة توست حبوب كاملة"] },
  { id: "b6", s: "b", e: "🫒", k: 380, p: 16, c: 34, f: 20, t: 5, cu: "me", $: 1, g: ["dairy", "gluten", "sesame"],
    n: ["Labneh plate with za'atar & veggies", "لبنة مع زعتر وخضار"],
    i: ["Labneh, za'atar, olive oil, cucumber, tomato, olives, whole-wheat pita", "لبنة، زعتر، زيت زيتون، خيار، طماطم، زيتون، خبز أسمر"] },
  { id: "b7", s: "b", e: "🌱", k: 350, p: 22, c: 22, f: 20, t: 15, cu: "west", $: 1, g: ["soy"],
    n: ["Tofu scramble with spinach", "توفو مخفوق مع السبانخ"],
    i: ["Firm tofu, spinach, peppers, turmeric, olive oil, corn tortilla", "توفو صلب، سبانخ، فلفل، كركم، زيت زيتون، تورتيلا ذرة"] },
  { id: "b8", s: "b", e: "🍌", k: 400, p: 14, c: 50, f: 16, t: 5, cu: "west", $: 1, g: ["gluten", "peanut"],
    n: ["Peanut butter & banana toast", "توست بزبدة الفول السوداني والموز"],
    i: ["2 slices whole-grain toast, peanut butter, banana, cinnamon", "شريحتا توست حبوب كاملة، زبدة فول سوداني، موز، قرفة"] },
  { id: "b9", s: "b", e: "🥭", k: 340, p: 9, c: 40, f: 17, t: 5, cu: "asian", $: 1, g: [],
    n: ["Coconut chia pudding with mango", "بودينغ الشيا بجوز الهند والمانجو"],
    i: ["Chia seeds, light coconut milk, mango, lime zest", "بذور شيا، حليب جوز هند خفيف، مانجو، قشر ليمون أخضر"] },
  { id: "b10", s: "b", e: "🥞", k: 410, p: 22, c: 52, f: 12, t: 15, cu: "west", $: 1, g: ["gluten", "egg", "dairy"],
    n: ["Banana oat pancakes", "بان كيك الشوفان والموز"],
    i: ["Oats, 2 eggs, banana, cinnamon, Greek yogurt on top", "شوفان، بيضتان، موز، قرفة، زبادي يوناني للتزيين"] },
  { id: "b11", s: "b", e: "🥑", k: 430, p: 20, c: 34, f: 24, t: 10, cu: "west", $: 2, g: ["gluten", "egg", "avocado"],
    n: ["Avocado toast with eggs", "توست بالأفوكادو والبيض"],
    i: ["2 slices sourdough, ½ avocado, 2 poached eggs, chili flakes", "شريحتا خبز مخمّر، نصف أفوكادو، بيضتان مسلوقتان، رقائق فلفل"] },
  { id: "b12", s: "b", e: "🐟", k: 330, p: 22, c: 28, f: 14, t: 5, cu: "west", $: 3, g: ["fish", "dairy"],
    n: ["Smoked salmon & cream cheese rice cakes", "كعك الأرز مع السلمون المدخن والجبن الكريمي"],
    i: ["3 rice cakes, light cream cheese, smoked salmon, cucumber, dill", "3 كعكات أرز، جبن كريمي خفيف، سلمون مدخن، خيار، شبت"] },
  { id: "b13", s: "b", e: "🍎", k: 410, p: 13, c: 55, f: 16, t: 15, cu: "west", $: 2, g: ["nuts"],
    n: ["Warm quinoa bowl with apple & almond butter", "طبق كينوا دافئ بالتفاح وزبدة اللوز"],
    i: ["Quinoa, apple, almond butter, cinnamon, plant milk", "كينوا، تفاح، زبدة لوز، قرفة، حليب نباتي"] },
  { id: "b14", s: "b", e: "🍑", k: 310, p: 26, c: 26, f: 10, t: 5, cu: "west", $: 1, g: ["dairy"],
    n: ["Cottage cheese bowl with fruit & seeds", "جبن كوتيج مع الفاكهة والبذور"],
    i: ["200g cottage cheese, peach or berries, pumpkin seeds", "200غ جبن كوتيج، خوخ أو توت، بذور يقطين"] },
  { id: "b15", s: "b", e: "🍠", k: 400, p: 18, c: 40, f: 18, t: 20, cu: "west", $: 1, g: ["egg"],
    n: ["Sweet potato hash with eggs", "بطاطا حلوة محمّرة مع البيض"],
    i: ["Diced sweet potato, peppers, onion, 2 eggs, paprika", "بطاطا حلوة مكعبات، فلفل، بصل، بيضتان، بابريكا"] },
  { id: "b16", s: "b", e: "🌮", k: 450, p: 22, c: 52, f: 16, t: 15, cu: "mex", $: 1, g: ["egg", "legume", "spicy"],
    n: ["Breakfast burrito bowl", "طبق بوريتو الفطور"],
    i: ["Scrambled eggs, black beans, brown rice, salsa, lettuce", "بيض مخفوق، فاصوليا سوداء، أرز بني، صلصة سالسا حارة، خس"] },
  { id: "b17", s: "b", e: "🍚", k: 360, p: 9, c: 62, f: 8, t: 20, cu: "west", $: 1, g: [],
    n: ["Cinnamon rice porridge with apple & seeds", "عصيدة الأرز بالقرفة والتفاح والبذور"],
    i: ["Rice cooked in rice milk, apple, cinnamon, pumpkin seeds", "أرز مطبوخ بحليب الأرز، تفاح، قرفة، بذور يقطين"] },

  { id: "b18", s: "b", e: "🫓", k: 430, p: 15, c: 50, f: 19, t: 15, cu: "me", $: 1, g: ["gluten", "dairy", "sesame"],
    n: ["Za'atar manakish with labneh", "مناقيش زعتر مع لبنة"],
    i: ["Za'atar flatbread with olive oil, labneh, cucumber, tomato, mint", "خبز مناقيش بالزعتر وزيت الزيتون، لبنة، خيار، طماطم، نعناع"] },
  { id: "b19", s: "b", e: "🍳", k: 400, p: 22, c: 24, f: 24, t: 10, cu: "me", $: 1, g: ["egg", "legume", "sesame"],
    n: ["Sumac eggs with hummus & vegetables", "بيض بالسماق مع حمص وخضار"],
    i: ["2 eggs fried in olive oil with sumac, 3 tbsp hummus, cucumber, tomato, olives", "بيضتان بزيت الزيتون والسماق، 3 ملاعق حمص، خيار، طماطم، زيتون"] },
  { id: "b20", s: "b", e: "🧀", k: 380, p: 22, c: 10, f: 28, t: 10, cu: "me", $: 2, g: ["dairy"],
    n: ["Grilled halloumi with tomato & olives", "حلوم مشوي مع طماطم وزيتون"],
    i: ["80g grilled halloumi, tomato, cucumber, olives, mint, 1 small orange", "80غ حلوم مشوي، طماطم، خيار، زيتون، نعناع، برتقالة صغيرة"] },
  { id: "b21", s: "b", e: "🍜", k: 450, p: 16, c: 62, f: 15, t: 20, cu: "me", $: 1, g: ["gluten", "egg"],
    n: ["Balaleet (saffron vermicelli with omelette)", "بلاليط"],
    i: ["Vermicelli, saffron, cardamom, a little sugar, thin omelette on top", "شعيرية، زعفران، هيل، قليل من السكر، أومليت رقيق فوقها"] },
  { id: "b22", s: "b", e: "🧁", k: 320, p: 24, c: 8, f: 21, t: 25, cu: "med", $: 1, g: ["egg", "dairy"],
    n: ["Spinach & feta egg muffins", "مافن البيض بالسبانخ والفيتا"],
    i: ["4 eggs, spinach, feta, peppers, baked in a muffin tin (makes 4)", "4 بيضات، سبانخ، فيتا، فلفل، تُخبز في قوالب مافن (4 قطع)"] },
  { id: "b23", s: "b", e: "🍅", k: 380, p: 20, c: 36, f: 17, t: 5, cu: "med", $: 2, g: ["gluten", "dairy", "avocado"],
    n: ["Cottage cheese, tomato & avocado toast", "توست جبن كوتيج مع طماطم وأفوكادو"],
    i: ["2 slices whole-grain toast, cottage cheese, tomato, ¼ avocado, oregano", "شريحتا توست حبوب كاملة، جبن كوتيج، طماطم، ربع أفوكادو، أوريغانو"] },
  { id: "b24", s: "b", e: "🫐", k: 400, p: 28, c: 50, f: 10, t: 5, cu: "west", $: 2, g: [],
    n: ["Vegan protein smoothie bowl", "طبق سموذي نباتي بالبروتين"],
    i: ["Pea protein, frozen berries, banana, pumpkin seeds, chia", "بروتين البازلاء، توت مجمد، موز، بذور يقطين، شيا"] },
  { id: "b25", s: "b", e: "🍚", k: 360, p: 16, c: 52, f: 9, t: 20, cu: "asian", $: 1, g: ["egg"],
    n: ["Savory rice congee with egg & greens", "عصيدة أرز مالحة مع بيض وخضار"],
    i: ["Rice, ginger, garlic, spinach, soft-boiled egg, spring onion", "أرز، زنجبيل، ثوم، سبانخ، بيضة مسلوقة، بصل أخضر"] },
  { id: "b26", s: "b", e: "🍵", k: 320, p: 12, c: 34, f: 15, t: 5, cu: "asian", $: 2, g: ["soy"],
    n: ["Matcha chia pudding with soy milk", "بودينغ الشيا بالماتشا وحليب الصويا"],
    i: ["Chia seeds, soy milk, matcha, kiwi, a little date syrup", "بذور شيا، حليب صويا، ماتشا، كيوي، قليل من شراب التمر"] },
  { id: "b27", s: "b", e: "🍳", k: 440, p: 22, c: 46, f: 18, t: 15, cu: "mex", $: 1, g: ["egg", "legume", "spicy"],
    n: ["Huevos rancheros", "بيض رانشيروس المكسيكي"],
    i: ["2 eggs, black beans, 2 corn tortillas, spicy tomato salsa, coriander", "بيضتان، فاصوليا سوداء، تورتيلا ذرة، صلصة طماطم حارة، كزبرة"] },
  { id: "b28", s: "b", e: "🌮", k: 420, p: 14, c: 52, f: 17, t: 10, cu: "mex", $: 1, g: ["legume", "avocado"],
    n: ["Avocado & black bean breakfast tacos", "تاكو الفطور بالأفوكادو والفاصوليا"],
    i: ["Corn tortillas, black beans, avocado, pico de gallo, lime", "تورتيلا ذرة، فاصوليا سوداء، أفوكادو، سلطة طماطم وبصل، ليمون أخضر"] },
  { id: "b29", s: "b", e: "🌯", k: 370, p: 34, c: 30, f: 12, t: 10, cu: "west", $: 1, g: ["poultry", "egg", "gluten"],
    n: ["Turkey & egg-white breakfast wrap", "راب الفطور بالديك الرومي وبياض البيض"],
    i: ["Whole-wheat wrap, 4 egg whites, sliced turkey breast, spinach, mustard", "تورتيلا قمح كامل، بياض 4 بيضات، شرائح صدر ديك رومي، سبانخ، خردل"] },
  { id: "b30", s: "b", e: "🍄", k: 360, p: 26, c: 6, f: 26, t: 10, cu: "west", $: 1, g: ["egg", "dairy", "mushroom"],
    n: ["Cheese & mushroom omelette", "أومليت الجبن والفطر"],
    i: ["3 eggs, mushrooms, 30g cheddar, chives, side of cherry tomatoes", "3 بيضات، فطر، 30غ جبن شيدر، ثوم معمّر، طماطم كرزية"] },
  { id: "b31", s: "b", e: "🥬", k: 300, p: 18, c: 14, f: 19, t: 20, cu: "me", $: 1, g: ["egg"],
    n: ["Green shakshuka with spinach & zucchini", "شكشوكة خضراء بالسبانخ والكوسا"],
    i: ["2 eggs, spinach, zucchini, leek, garlic, cumin, olive oil", "بيضتان، سبانخ، كوسا، كراث، ثوم، كمون، زيت زيتون"] },
  { id: "b32", s: "b", e: "🍱", k: 380, p: 20, c: 42, f: 14, t: 15, cu: "asian", $: 1, g: ["egg", "soy", "gluten"],
    n: ["Japanese rolled omelette with rice", "أومليت ياباني ملفوف مع أرز"],
    i: ["3 eggs rolled with soy sauce, small bowl of rice, cucumber pickles", "3 بيضات ملفوفة مع صلصة الصويا، صحن أرز صغير، مخلل خيار"] },
  { id: "b33", s: "b", e: "🥑", k: 470, p: 21, c: 6, f: 40, t: 10, cu: "west", $: 1, g: ["egg", "avocado", "dairy"],
    n: ["Keto eggs & avocado plate", "طبق كيتو بالبيض والأفوكادو"],
    i: ["3 eggs cooked in butter, ½ avocado, sautéed spinach", "3 بيضات بالزبدة، نصف أفوكادو، سبانخ سوتيه"] },
  { id: "b34", s: "b", e: "🫒", k: 420, p: 22, c: 8, f: 33, t: 5, cu: "me", $: 1, g: ["dairy", "egg"],
    n: ["Labneh, olives & boiled eggs (no bread)", "لبنة وزيتون وبيض مسلوق (بدون خبز)"],
    i: ["Labneh with olive oil and mint, 2 boiled eggs, olives, cucumber", "لبنة بزيت الزيتون والنعناع، بيضتان مسلوقتان، زيتون، خيار"] },
  { id: "b35", s: "b", e: "🥥", k: 370, p: 8, c: 8, f: 34, t: 5, cu: "west", $: 1, g: [],
    n: ["Keto coconut chia pudding", "بودينغ الشيا الكيتو بجوز الهند"],
    i: ["Chia seeds, full-fat coconut milk, a few raspberries, vanilla (no sugar)", "بذور شيا، حليب جوز هند كامل الدسم، حبات توت قليلة، فانيليا (بدون سكر)"] },
  { id: "b36", s: "b", e: "🐟", k: 420, p: 30, c: 5, f: 31, t: 10, cu: "west", $: 3, g: ["fish", "dairy", "egg"],
    n: ["Smoked salmon, eggs & cream cheese", "سلمون مدخن مع بيض وجبن كريمي"],
    i: ["2 scrambled eggs, smoked salmon, cream cheese, cucumber, dill", "بيضتان مخفوقتان، سلمون مدخن، جبن كريمي، خيار، شبت"] },
  { id: "b37", s: "b", e: "🍳", k: 480, p: 28, c: 4, f: 39, t: 10, cu: "me", $: 2, g: ["meat", "egg", "spicy"],
    n: ["Sujuk with eggs", "سجق بالبيض"],
    i: ["Sliced beef sujuk, 2 eggs, a few tomato slices, parsley", "شرائح سجق لحم، بيضتان، شرائح طماطم قليلة، بقدونس"] },
  { id: "b38", s: "b", e: "🌱", k: 360, p: 24, c: 7, f: 26, t: 10, cu: "west", $: 1, g: ["soy"],
    n: ["Keto tofu & spinach scramble", "توفو كيتو مخفوق بالسبانخ"],
    i: ["Firm tofu, spinach, turmeric, olive oil, pumpkin seeds on top", "توفو صلب، سبانخ، كركم، زيت زيتون، بذور يقطين فوقه"] },
  { id: "b39", s: "b", e: "🥣", k: 480, p: 22, c: 56, f: 19, t: 15, cu: "me", $: 1, g: ["legume", "dairy", "gluten", "sesame"],
    n: ["Light fatteh hummus", "فتة حمص خفيفة"],
    i: ["Warm chickpeas, toasted pita, yogurt-tahini sauce, cumin, parsley", "حمص حب دافئ، خبز محمّص، صلصة زبادي وطحينة، كمون، بقدونس"] },
  { id: "b40", s: "b", e: "🫘", k: 420, p: 17, c: 44, f: 20, t: 15, cu: "me", $: 1, g: ["legume", "sesame"],
    n: ["Msabbaha with vegetables", "مسبّحة مع خضار"],
    i: ["Warm chickpeas with tahini, lemon and garlic, olive oil, cucumber, tomato, mint", "حمص حب دافئ بالطحينة والليمون والثوم، زيت زيتون، خيار، طماطم، نعناع"] },
  { id: "b41", s: "b", e: "🥔", k: 420, p: 17, c: 40, f: 21, t: 20, cu: "me", $: 1, g: ["egg"],
    n: ["Eggs with potatoes (bayd w batata)", "بيض بالبطاطا"],
    i: ["2 eggs, diced potato, onion, olive oil, cumin, parsley", "بيضتان، بطاطا مكعبات، بصل، زيت زيتون، كمون، بقدونس"] },
  { id: "b42", s: "b", e: "🧀", k: 430, p: 20, c: 38, f: 22, t: 5, cu: "me", $: 2, g: ["dairy", "gluten"],
    n: ["Akkawi cheese & olive breakfast plate", "طبق فطور جبنة عكاوي وزيتون"],
    i: ["60g akkawi cheese, olives, cucumber, tomato, mint, ½ whole-wheat pita", "60غ جبنة عكاوي، زيتون، خيار، طماطم، نعناع، نصف رغيف خبز أسمر"] },
  { id: "b43", s: "b", e: "🍳", k: 340, p: 18, c: 14, f: 23, t: 15, cu: "med", $: 1, g: ["egg"],
    n: ["Turkish menemen", "منمن تركي (بيض بالطماطم والفلفل)"],
    i: ["3 eggs scrambled with tomato, green pepper, onion and olive oil", "3 بيضات مخفوقة مع الطماطم والفلفل الأخضر والبصل وزيت الزيتون"] },
  { id: "b44", s: "b", e: "🌯", k: 400, p: 26, c: 32, f: 18, t: 10, cu: "med", $: 1, g: ["egg", "dairy", "gluten"],
    n: ["Spinach & feta egg wrap", "راب البيض بالسبانخ والفيتا"],
    i: ["2 eggs + 2 egg whites, spinach, 30g feta, whole-wheat wrap", "بيضتان + بياض بيضتين، سبانخ، 30غ فيتا، تورتيلا قمح كامل"] },
  { id: "b45", s: "b", e: "🍅", k: 410, p: 18, c: 42, f: 19, t: 10, cu: "med", $: 1, g: ["gluten", "egg"],
    n: ["Pan con tomate with eggs", "خبز بالطماطم على الطريقة الإسبانية مع بيض"],
    i: ["Toasted sourdough rubbed with tomato and garlic, olive oil, 2 boiled eggs", "خبز مخمّر محمّص مدهون بالطماطم والثوم، زيت زيتون، بيضتان مسلوقتان"] },
  { id: "b46", s: "b", e: "🧀", k: 460, p: 30, c: 6, f: 35, t: 10, cu: "me", $: 2, g: ["dairy", "egg"],
    n: ["Halloumi & eggs plate (keto)", "حلوم وبيض (كيتو)"],
    i: ["Grilled halloumi, 2 fried eggs, cucumber, olives, mint", "حلوم مشوي، بيضتان مقليتان، خيار، زيتون، نعناع"] },
  { id: "b47", s: "b", e: "🫒", k: 420, p: 26, c: 5, f: 33, t: 10, cu: "med", $: 1, g: ["egg", "dairy"],
    n: ["Feta & olive omelette (keto)", "أومليت الفيتا والزيتون (كيتو)"],
    i: ["3 eggs, 30g feta, olives, spinach, olive oil, oregano", "3 بيضات، 30غ فيتا، زيتون، سبانخ، زيت زيتون، أوريغانو"] },
  { id: "b48", s: "b", e: "🥑", k: 380, p: 10, c: 40, f: 20, t: 5, cu: "me", $: 1, g: ["gluten", "sesame", "avocado"],
    n: ["Za'atar avocado toast", "توست الأفوكادو بالزعتر"],
    i: ["2 slices whole-grain toast, ½ avocado, za'atar, tomato, lemon", "شريحتا توست حبوب كاملة، نصف أفوكادو، زعتر، طماطم، ليمون"] },
  { id: "b49", s: "b", e: "🍓", k: 375, p: 24, c: 42, f: 12, t: 5, cu: "med", $: 2, g: ["dairy", "nuts"],
    n: ["Greek yogurt bowl with fruit & pistachios", "زبادي يوناني مع فاكهة وفستق حلبي"],
    i: ["200g Greek yogurt, berries or figs, 15g pistachios, a little honey", "200غ زبادي يوناني، توت أو تين، 15غ فستق حلبي، قليل من العسل"] },
  { id: "b50", s: "b", e: "🍳", k: 380, p: 24, c: 10, f: 27, t: 20, cu: "med", $: 1, g: ["egg", "dairy"],
    n: ["Vegetable frittata", "فريتاتا بالخضار"],
    i: ["3 eggs, zucchini, peppers, onion, 20g parmesan, olive oil", "3 بيضات، كوسا، فلفل، بصل، 20غ بارميزان، زيت زيتون"] },
  { id: "b51", s: "b", e: "🍅", k: 385, p: 18, c: 40, f: 17, t: 5, cu: "med", $: 1, g: ["dairy", "gluten"],
    n: ["Ricotta & tomato toast", "توست الريكوتا بالطماطم"],
    i: ["2 slices whole-grain toast, ricotta, cherry tomatoes, basil, olive oil", "شريحتا توست حبوب كاملة، ريكوتا، طماطم كرزية، ريحان، زيت زيتون"] },
  { id: "b52", s: "b", e: "🥞", k: 360, p: 16, c: 40, f: 15, t: 15, cu: "med", $: 1, g: ["legume"],
    n: ["Chickpea-flour omelette with vegetables (vegan)", "أومليت دقيق الحمص بالخضار (نباتي)"],
    i: ["Chickpea flour batter, spinach, tomato, onion, olive oil, herbs", "خليط دقيق الحمص، سبانخ، طماطم، بصل، زيت زيتون، أعشاب"] },
  // Lunch
  { id: "l1", s: "l", e: "🥗", k: 480, p: 42, c: 30, f: 20, t: 20, cu: "med", $: 2, g: ["poultry", "legume"],
    n: ["Grilled chicken & chickpea salad", "سلطة دجاج مشوي مع الحمص"],
    i: ["Chicken breast, mixed greens, chickpeas, cucumber, tomato, lemon-olive oil dressing", "صدر دجاج، خضار ورقية، حمص، خيار، طماطم، صلصة ليمون وزيت زيتون"] },
  { id: "l2", s: "l", e: "🍲", k: 420, p: 22, c: 62, f: 9, t: 30, cu: "me", $: 1, g: ["legume"],
    n: ["Lentil soup with lemon", "شوربة عدس بالليمون"],
    i: ["Red lentils, onion, carrot, cumin, lemon, side salad", "عدس أحمر، بصل، جزر، كمون، ليمون، سلطة جانبية"] },
  { id: "l3", s: "l", e: "🥙", k: 580, p: 44, c: 56, f: 19, t: 25, cu: "me", $: 2, g: ["poultry", "sesame"],
    n: ["Chicken shawarma bowl", "طبق شاورما الدجاج"],
    i: ["Spiced chicken, rice, salad, pickles, tahini sauce", "دجاج متبل، أرز، سلطة، مخلل، صلصة طحينة"] },
  { id: "l4", s: "l", e: "🐟", k: 440, p: 38, c: 32, f: 17, t: 10, cu: "med", $: 1, g: ["fish", "legume"],
    n: ["Tuna & white bean salad", "سلطة التونة والفاصوليا البيضاء"],
    i: ["Canned tuna, white beans, red onion, parsley, lemon, olive oil", "تونة معلبة، فاصوليا بيضاء، بصل أحمر، بقدونس، ليمون، زيت زيتون"] },
  { id: "l5", s: "l", e: "🧆", k: 540, p: 20, c: 64, f: 22, t: 15, cu: "me", $: 1, g: ["legume", "gluten", "sesame"],
    n: ["Falafel wrap with tahini", "راب فلافل بالطحينة"],
    i: ["Baked falafel, whole-wheat wrap, lettuce, tomato, pickles, tahini", "فلافل مخبوزة، خبز تورتيلا أسمر، خس، طماطم، مخلل، طحينة"] },
  { id: "l6", s: "l", e: "🧀", k: 500, p: 24, c: 44, f: 25, t: 20, cu: "me", $: 2, g: ["dairy"],
    n: ["Quinoa tabbouleh with grilled halloumi", "تبولة الكينوا مع حلوم مشوي"],
    i: ["Quinoa, parsley, mint, tomato, lemon, olive oil, 60g halloumi", "كينوا، بقدونس، نعناع، طماطم، ليمون، زيت زيتون، 60غ حلوم"] },
  { id: "l7", s: "l", e: "🌯", k: 520, p: 34, c: 42, f: 22, t: 10, cu: "west", $: 2, g: ["poultry", "gluten", "avocado"],
    n: ["Turkey & avocado wrap", "راب الديك الرومي والأفوكادو"],
    i: ["Whole-wheat wrap, turkey breast, avocado, tomato, lettuce, mustard", "تورتيلا قمح كامل، صدر ديك رومي، أفوكادو، طماطم، خس، خردل"] },
  { id: "l8", s: "l", e: "🥩", k: 560, p: 38, c: 58, f: 18, t: 20, cu: "asian", $: 2, g: ["meat", "soy", "gluten"],
    n: ["Beef & vegetable stir-fry with rice", "لحم بقري سوتيه بالخضار مع الأرز"],
    i: ["Lean beef strips, broccoli, peppers, soy sauce, ginger, rice", "شرائح لحم قليل الدهن، بروكلي، فلفل، صلصة صويا، زنجبيل، أرز"] },
  { id: "l9", s: "l", e: "🍜", k: 530, p: 24, c: 62, f: 20, t: 20, cu: "asian", $: 1, g: ["soy", "peanut", "gluten"],
    n: ["Tofu rice-noodle bowl with peanut sauce", "نودلز الأرز بالتوفو وصلصة الفول السوداني"],
    i: ["Rice noodles, tofu, carrot, cabbage, peanut-soy sauce, lime", "نودلز أرز، توفو، جزر، ملفوف، صلصة فول سوداني وصويا، ليمون أخضر"] },
  { id: "l10", s: "l", e: "🌯", k: 580, p: 42, c: 64, f: 14, t: 25, cu: "mex", $: 2, g: ["poultry", "legume", "spicy"],
    n: ["Chicken burrito bowl", "طبق بوريتو الدجاج"],
    i: ["Chicken, brown rice, black beans, corn, salsa, lettuce", "دجاج، أرز بني، فاصوليا سوداء، ذرة، صلصة سالسا حارة، خس"] },
  { id: "l11", s: "l", e: "🍛", k: 500, p: 19, c: 80, f: 12, t: 35, cu: "me", $: 1, g: ["legume"],
    n: ["Mujaddara with salad", "مجدرة مع سلطة"],
    i: ["Brown lentils, rice, caramelised onions, olive oil, cucumber-tomato salad", "عدس بني، أرز، بصل مكرمل، زيت زيتون، سلطة خيار وطماطم"] },
  { id: "l12", s: "l", e: "🍣", k: 560, p: 34, c: 58, f: 20, t: 15, cu: "asian", $: 3, g: ["fish", "soy", "sesame", "avocado", "gluten"],
    n: ["Salmon poke bowl", "طبق بوكي السلمون"],
    i: ["Salmon, sushi rice, edamame, avocado, cucumber, soy sauce, sesame", "سلمون، أرز سوشي، إدامامي، أفوكادو، خيار، صلصة صويا، سمسم"] },
  { id: "l13", s: "l", e: "🍳", k: 480, p: 18, c: 64, f: 16, t: 15, cu: "asian", $: 1, g: ["egg", "soy", "gluten"],
    n: ["Egg & vegetable fried rice", "أرز مقلي بالبيض والخضار"],
    i: ["Brown rice, 2 eggs, peas, carrot, spring onion, soy sauce", "أرز بني، بيضتان، بازلاء، جزر، بصل أخضر، صلصة صويا"] },
  { id: "l14", s: "l", e: "🥗", k: 450, p: 18, c: 42, f: 22, t: 10, cu: "med", $: 1, g: ["legume", "dairy"],
    n: ["Chickpea & feta salad", "سلطة الحمص والفيتا"],
    i: ["Chickpeas, feta, cucumber, tomato, red onion, olives, oregano", "حمص، جبنة فيتا، خيار، طماطم، بصل أحمر، زيتون، أوريغانو"] },
  { id: "l15", s: "l", e: "🍲", k: 400, p: 34, c: 38, f: 11, t: 30, cu: "west", $: 1, g: ["poultry"],
    n: ["Chicken & vegetable soup", "شوربة الدجاج والخضار"],
    i: ["Chicken breast, potato, carrot, celery, onion, herbs", "صدر دجاج، بطاطا، جزر، كرفس، بصل، أعشاب"] },
  { id: "l16", s: "l", e: "🍠", k: 480, p: 17, c: 80, f: 9, t: 25, cu: "mex", $: 1, g: ["legume"],
    n: ["Black bean & sweet potato bowl", "طبق الفاصوليا السوداء والبطاطا الحلوة"],
    i: ["Roasted sweet potato, black beans, corn, salsa, lime, coriander", "بطاطا حلوة مشوية، فاصوليا سوداء، ذرة، صلصة سالسا، ليمون أخضر، كزبرة"] },
  { id: "l17", s: "l", e: "🥗", k: 470, p: 18, c: 62, f: 17, t: 10, cu: "me", $: 1, g: ["legume"],
    n: ["Lentil, rice & cucumber salad", "سلطة العدس والأرز والخيار"],
    i: ["Cooked green lentils, rice, cucumber, parsley, mint, lemon, olive oil", "عدس أخضر مطبوخ، أرز، خيار، بقدونس، نعناع، ليمون، زيت زيتون"] },
  { id: "l18", s: "l", e: "🍗", k: 500, p: 40, c: 50, f: 14, t: 15, cu: "west", $: 1, g: ["poultry"],
    n: ["Chicken, rice & roasted veg box", "علبة دجاج وأرز وخضار مشوية"],
    i: ["Chicken breast, rice, roasted zucchini and peppers, olive oil, herbs", "صدر دجاج، أرز، كوسا وفلفل مشوي، زيت زيتون، أعشاب"] },
  { id: "l19", s: "l", e: "🥪", k: 460, p: 24, c: 44, f: 20, t: 10, cu: "west", $: 1, g: ["egg", "gluten"],
    n: ["Egg salad sandwich with greens", "ساندويتش سلطة البيض مع الخضار"],
    i: ["2 boiled eggs, light mayo, whole-grain bread, lettuce, cucumber", "بيضتان مسلوقتان، مايونيز خفيف، خبز حبوب كاملة، خس، خيار"] },
  { id: "l20", s: "l", e: "🥗", k: 480, p: 24, c: 36, f: 26, t: 15, cu: "med", $: 1, g: ["dairy", "egg"],
    n: ["Greek salad with eggs & potatoes", "سلطة يونانية بالبيض والبطاطا"],
    i: ["Feta, 2 boiled eggs, boiled potatoes, cucumber, tomato, olives, olive oil", "جبنة فيتا، بيضتان مسلوقتان، بطاطا مسلوقة، خيار، طماطم، زيتون، زيت زيتون"] },

  { id: "l21", s: "l", e: "🥗", k: 460, p: 38, c: 34, f: 19, t: 15, cu: "me", $: 1, g: ["poultry", "gluten"],
    n: ["Fattoush with grilled chicken", "فتوش بالدجاج المشوي"],
    i: ["Grilled chicken, lettuce, tomato, cucumber, radish, toasted pita, sumac dressing", "دجاج مشوي، خس، طماطم، خيار، فجل، خبز محمّص، صلصة السماق"] },
  { id: "l22", s: "l", e: "🍃", k: 420, p: 12, c: 58, f: 16, t: 10, cu: "me", $: 2, g: ["dairy"],
    n: ["Stuffed vine leaves with yogurt", "ورق عنب مع زبادي"],
    i: ["8 vine leaves stuffed with rice & herbs, Greek yogurt, cucumber salad", "8 أصابع ورق عنب بالأرز والأعشاب، زبادي يوناني، سلطة خيار"] },
  { id: "l23", s: "l", e: "🥙", k: 600, p: 42, c: 52, f: 24, t: 25, cu: "me", $: 2, g: ["meat", "sesame"],
    n: ["Beef shawarma plate with rice", "طبق شاورما لحم مع أرز"],
    i: ["Spiced beef strips, rice, salad, pickles, tahini sauce", "شرائح لحم متبلة، أرز، سلطة، مخلل، صلصة طحينة"] },
  { id: "l24", s: "l", e: "🐟", k: 505, p: 38, c: 58, f: 13, t: 30, cu: "me", $: 2, g: ["fish"],
    n: ["Sayadieh (spiced fish with rice)", "صيادية سمك"],
    i: ["White fish fillet, rice cooked with caramelised onion and cumin, lemon", "شريحة سمك أبيض، أرز مطبوخ بالبصل المكرمل والكمون، ليمون"] },
  { id: "l25", s: "l", e: "🍢", k: 525, p: 44, c: 46, f: 18, t: 25, cu: "med", $: 2, g: ["poultry", "dairy"],
    n: ["Chicken souvlaki bowl with tzatziki", "طبق سوفلاكي الدجاج مع تزاتزيكي"],
    i: ["Chicken skewers, rice, tomato-cucumber salad, tzatziki (yogurt, cucumber, garlic)", "أسياخ دجاج، أرز، سلطة طماطم وخيار، تزاتزيكي (زبادي وخيار وثوم)"] },
  { id: "l26", s: "l", e: "🍲", k: 380, p: 16, c: 58, f: 9, t: 30, cu: "med", $: 1, g: ["legume", "gluten"],
    n: ["Minestrone soup with beans", "شوربة مينستروني بالفاصوليا"],
    i: ["White beans, small pasta, carrot, celery, zucchini, tomato, basil", "فاصوليا بيضاء، معكرونة صغيرة، جزر، كرفس، كوسا، طماطم، ريحان"] },
  { id: "l27", s: "l", e: "🍤", k: 450, p: 34, c: 40, f: 17, t: 15, cu: "med", $: 2, g: ["shellfish"],
    n: ["Shrimp & quinoa salad", "سلطة الروبيان والكينوا"],
    i: ["Shrimp, quinoa, cucumber, cherry tomatoes, parsley, lemon, olive oil", "روبيان، كينوا، خيار، طماطم كرزية، بقدونس، ليمون، زيت زيتون"] },
  { id: "l28", s: "l", e: "🍗", k: 545, p: 40, c: 68, f: 12, t: 20, cu: "asian", $: 1, g: ["poultry", "soy", "gluten", "sesame"],
    n: ["Chicken teriyaki rice bowl", "طبق دجاج ترياكي مع أرز"],
    i: ["Chicken breast, teriyaki sauce, rice, steamed broccoli, sesame seeds", "صدر دجاج، صلصة ترياكي، أرز، بروكلي على البخار، بذور سمسم"] },
  { id: "l29", s: "l", e: "🥩", k: 400, p: 36, c: 16, f: 21, t: 15, cu: "asian", $: 2, g: ["meat", "fish", "spicy"],
    n: ["Thai beef salad", "سلطة اللحم التايلاندية"],
    i: ["Grilled lean beef, lettuce, cucumber, mint, chili-lime fish-sauce dressing", "لحم قليل الدهن مشوي، خس، خيار، نعناع، صلصة ليمون وفلفل وصلصة سمك"] },
  { id: "l30", s: "l", e: "🍜", k: 470, p: 20, c: 62, f: 15, t: 15, cu: "asian", $: 1, g: ["egg", "gluten", "soy"],
    n: ["Vegetable ramen with egg", "شوربة رامن بالخضار والبيض"],
    i: ["Wheat noodles, vegetable broth, soy sauce, bok choy, mixed vegetables, soft egg", "نودلز قمح، مرق خضار، صلصة صويا، ملفوف صيني، خضار مشكلة، بيضة مسلوقة"] },
  { id: "l31", s: "l", e: "🍛", k: 520, p: 16, c: 76, f: 17, t: 25, cu: "asian", $: 1, g: ["legume", "spicy"],
    n: ["Green curry with vegetables & chickpeas", "كاري أخضر بالخضار والحمص"],
    i: ["Green curry paste, light coconut milk, chickpeas, peppers, green beans, jasmine rice", "معجون كاري أخضر، حليب جوز هند خفيف، حمص، فلفل، فاصوليا خضراء، أرز ياسمين"] },
  { id: "l32", s: "l", e: "🍲", k: 430, p: 34, c: 40, f: 14, t: 25, cu: "mex", $: 1, g: ["poultry", "spicy"],
    n: ["Chicken tortilla soup", "شوربة الدجاج المكسيكية بالتورتيلا"],
    i: ["Shredded chicken, tomato-chili broth, corn, baked corn tortilla strips, lime", "دجاج مقطع، مرق طماطم وفلفل حار، ذرة، شرائح تورتيلا ذرة مخبوزة، ليمون أخضر"] },
  { id: "l33", s: "l", e: "🐟", k: 475, p: 32, c: 46, f: 18, t: 20, cu: "mex", $: 2, g: ["fish"],
    n: ["Fish tacos with cabbage slaw", "تاكو السمك مع سلطة الملفوف"],
    i: ["Grilled white fish, 3 corn tortillas, cabbage slaw, lime, salsa", "سمك أبيض مشوي، 3 تورتيلا ذرة، سلطة ملفوف، ليمون أخضر، صلصة سالسا"] },
  { id: "l34", s: "l", e: "🫑", k: 470, p: 14, c: 62, f: 19, t: 20, cu: "mex", $: 1, g: ["legume", "avocado"],
    n: ["Veggie fajita bowl with guacamole", "طبق فاهيتا الخضار مع جواكامولي"],
    i: ["Peppers, onion, pinto beans, brown rice, guacamole, salsa", "فلفل، بصل، فاصوليا بينتو، أرز بني، جواكامولي، صلصة سالسا"] },
  { id: "l35", s: "l", e: "🍝", k: 520, p: 20, c: 62, f: 21, t: 15, cu: "west", $: 1, g: ["gluten", "dairy"],
    n: ["Caprese pasta salad", "سلطة معكرونة كابريزي"],
    i: ["Whole-wheat pasta, mozzarella, cherry tomatoes, basil, olive oil, balsamic", "معكرونة قمح كامل، موزاريلا، طماطم كرزية، ريحان، زيت زيتون، خل بلسمي"] },
  { id: "l36", s: "l", e: "🥬", k: 465, p: 42, c: 18, f: 25, t: 15, cu: "west", $: 2, g: ["poultry", "dairy", "gluten"],
    n: ["Light chicken Caesar salad", "سلطة سيزر خفيفة بالدجاج"],
    i: ["Grilled chicken, romaine, parmesan, croutons, yogurt-based Caesar dressing", "دجاج مشوي، خس روماني، بارميزان، خبز محمّص، صلصة سيزر بالزبادي"] },
  { id: "l37", s: "l", e: "🥔", k: 460, p: 34, c: 62, f: 8, t: 10, cu: "west", $: 1, g: ["fish"],
    n: ["Baked potato with tuna & sweetcorn", "بطاطا مشوية بالتونة والذرة"],
    i: ["Microwave-baked potato, canned tuna, sweetcorn, light dressing, salad", "بطاطا مخبوزة بالميكروويف، تونة معلبة، ذرة حلوة، صلصة خفيفة، سلطة"] },
  { id: "l38", s: "l", e: "🧀", k: 560, p: 48, c: 9, f: 37, t: 15, cu: "me", $: 2, g: ["poultry", "dairy"],
    n: ["Grilled chicken & halloumi salad", "سلطة دجاج مشوي وحلوم"],
    i: ["Chicken breast, 50g halloumi, mixed greens, cucumber, olives, olive oil-lemon dressing", "صدر دجاج، 50غ حلوم، خضار ورقية، خيار، زيتون، صلصة زيت زيتون وليمون"] },
  { id: "l39", s: "l", e: "🐟", k: 500, p: 38, c: 8, f: 35, t: 10, cu: "med", $: 2, g: ["fish", "avocado"],
    n: ["Tuna & avocado salad bowl", "طبق سلطة التونة والأفوكادو"],
    i: ["Canned tuna, ½ avocado, lettuce, cucumber, red onion, olive oil, lemon", "تونة معلبة، نصف أفوكادو، خس، خيار، بصل أحمر، زيت زيتون، ليمون"] },
  { id: "l40", s: "l", e: "🍔", k: 580, p: 42, c: 6, f: 43, t: 15, cu: "west", $: 2, g: ["meat", "dairy"],
    n: ["Bunless cheeseburger with salad", "برغر بالجبن بدون خبز مع سلطة"],
    i: ["Beef patty, cheddar slice, lettuce, pickles, tomato slice, mustard, side salad", "قرص لحم بقري، شريحة شيدر، خس، مخلل، شريحة طماطم، خردل، سلطة جانبية"] },
  { id: "l41", s: "l", e: "🍢", k: 540, p: 36, c: 9, f: 40, t: 20, cu: "me", $: 2, g: ["meat", "sesame"],
    n: ["Kofta with tahini & salad (no bread)", "كفتة بالطحينة مع سلطة (بدون خبز)"],
    i: ["Grilled beef kofta, tahini sauce, cucumber-tomato salad, parsley", "كفتة لحم مشوية، صلصة طحينة، سلطة خيار وطماطم، بقدونس"] },
  { id: "l42", s: "l", e: "🥚", k: 430, p: 22, c: 5, f: 36, t: 10, cu: "west", $: 1, g: ["egg"],
    n: ["Egg salad lettuce cups", "سلطة البيض في أوراق الخس"],
    i: ["3 boiled eggs, mayo, mustard, chives, lettuce leaves, olives", "3 بيضات مسلوقة، مايونيز، خردل، ثوم معمّر، أوراق خس، زيتون"] },
  { id: "l43", s: "l", e: "🥥", k: 470, p: 36, c: 10, f: 32, t: 20, cu: "asian", $: 2, g: ["poultry", "fish", "spicy"],
    n: ["Tom kha coconut chicken soup", "شوربة توم خا بالدجاج وجوز الهند"],
    i: ["Chicken, coconut milk, galangal or ginger, lemongrass, lime, chili, fish sauce", "دجاج، حليب جوز هند، زنجبيل، عشبة الليمون، ليمون أخضر، فلفل حار، صلصة سمك"] },
  { id: "l44", s: "l", e: "🍆", k: 510, p: 26, c: 12, f: 40, t: 20, cu: "med", $: 2, g: ["dairy"],
    n: ["Halloumi & roasted vegetable salad", "سلطة الحلوم والخضار المشوية"],
    i: ["Grilled halloumi, roasted eggplant and zucchini, rocket, pumpkin seeds, olive oil", "حلوم مشوي، باذنجان وكوسا مشوية، جرجير، بذور يقطين، زيت زيتون"] },
  { id: "l45", s: "l", e: "🥗", k: 480, p: 22, c: 10, f: 39, t: 10, cu: "asian", $: 1, g: ["soy", "avocado"],
    n: ["Keto tofu & avocado salad bowl", "طبق سلطة التوفو والأفوكادو (كيتو)"],
    i: ["Firm tofu, ½ avocado, cucumber, cabbage, ginger-lime dressing, olive oil", "توفو صلب، نصف أفوكادو، خيار، ملفوف، صلصة زنجبيل وليمون، زيت زيتون"] },
  { id: "l46", s: "l", e: "🌯", k: 550, p: 40, c: 48, f: 22, t: 30, cu: "me", $: 2, g: ["poultry", "gluten"],
    n: ["Musakhan chicken wrap", "راب مسخّن الدجاج"],
    i: ["Sumac chicken with caramelised onion and olive oil in taboon or whole-wheat bread", "دجاج بالسماق مع بصل مكرمل وزيت زيتون في خبز طابون أو خبز أسمر"] },
  { id: "l47", s: "l", e: "🥗", k: 435, p: 38, c: 30, f: 18, t: 20, cu: "me", $: 1, g: ["poultry", "gluten"],
    n: ["Tabbouleh with grilled chicken", "تبولة مع دجاج مشوي"],
    i: ["Parsley, bulgur, tomato, mint, lemon, olive oil, grilled chicken breast", "بقدونس، برغل، طماطم، نعناع، ليمون، زيت زيتون، صدر دجاج مشوي"] },
  { id: "l48", s: "l", e: "🌾", k: 450, p: 16, c: 62, f: 15, t: 20, cu: "me", $: 1, g: ["gluten", "legume"],
    n: ["Freekeh salad with chickpeas", "سلطة الفريكة بالحمص"],
    i: ["Cooked freekeh, chickpeas, cucumber, parsley, pomegranate, lemon, olive oil", "فريكة مطبوخة، حمص، خيار، بقدونس، رمان، ليمون، زيت زيتون"] },
  { id: "l49", s: "l", e: "🍲", k: 470, p: 17, c: 78, f: 10, t: 30, cu: "me", $: 1, g: ["legume"],
    n: ["White bean stew (fasolia) with rice", "فاصوليا بيضاء بالطماطم مع أرز"],
    i: ["White beans cooked in tomato with garlic and coriander, rice", "فاصوليا بيضاء مطبوخة بالطماطم والثوم والكزبرة، أرز"] },
  { id: "l50", s: "l", e: "🥗", k: 470, p: 40, c: 14, f: 28, t: 15, cu: "med", $: 2, g: ["poultry", "dairy"],
    n: ["Greek salad with grilled chicken", "سلطة يونانية مع دجاج مشوي"],
    i: ["Tomato, cucumber, red onion, olives, feta, olive oil, oregano, grilled chicken", "طماطم، خيار، بصل أحمر، زيتون، فيتا، زيت زيتون، أوريغانو، دجاج مشوي"] },
  { id: "l51", s: "l", e: "🐟", k: 470, p: 36, c: 28, f: 24, t: 20, cu: "med", $: 2, g: ["fish", "egg"],
    n: ["Tuna niçoise salad", "سلطة نيسواز بالتونة"],
    i: ["Tuna, boiled egg, baby potatoes, green beans, olives, tomato, mustard dressing", "تونة، بيضة مسلوقة، بطاطا صغيرة، فاصوليا خضراء، زيتون، طماطم، صلصة الخردل"] },
  { id: "l52", s: "l", e: "🫑", k: 445, p: 22, c: 46, f: 19, t: 15, cu: "med", $: 1, g: ["legume", "dairy"],
    n: ["Lentil & feta salad with roasted peppers", "سلطة العدس والفيتا مع فلفل مشوي"],
    i: ["Green lentils, roasted red peppers, feta, rocket, red onion, olive oil, lemon", "عدس أخضر، فلفل أحمر مشوي، فيتا، جرجير، بصل أحمر، زيت زيتون، ليمون"] },
  { id: "l53", s: "l", e: "🍋", k: 420, p: 34, c: 44, f: 12, t: 30, cu: "med", $: 1, g: ["poultry", "egg", "gluten"],
    n: ["Greek lemon chicken & orzo soup (avgolemono)", "شوربة الدجاج بالليمون واللسان العصفور (أفغوليمونو)"],
    i: ["Chicken, orzo, chicken broth, egg-lemon sauce, dill", "دجاج، لسان عصفور، مرق دجاج، صلصة البيض والليمون، شبت"] },
  { id: "l54", s: "l", e: "🥙", k: 500, p: 44, c: 9, f: 32, t: 20, cu: "me", $: 2, g: ["poultry"],
    n: ["Chicken shawarma salad with toum (keto)", "سلطة شاورما الدجاج مع ثومية (كيتو)"],
    i: ["Spiced chicken, lettuce, cucumber, pickles, garlic sauce, no bread", "دجاج متبّل، خس، خيار، مخلل، ثومية، بدون خبز"] },
  { id: "l55", s: "l", e: "🐟", k: 540, p: 38, c: 9, f: 39, t: 20, cu: "med", $: 3, g: ["fish", "dairy"],
    n: ["Greek salad with grilled salmon (keto)", "سلطة يونانية مع سلمون مشوي (كيتو)"],
    i: ["Grilled salmon, tomato, cucumber, olives, feta, olive oil", "سلمون مشوي، طماطم، خيار، زيتون، فيتا، زيت زيتون"] },
  // Dinner
  { id: "d1", s: "d", e: "🐟", k: 560, p: 40, c: 40, f: 25, t: 25, cu: "med", $: 3, g: ["fish"],
    n: ["Baked salmon with quinoa & broccoli", "سلمون بالفرن مع الكينوا والبروكلي"],
    i: ["Salmon fillet, quinoa, broccoli, lemon, garlic, olive oil", "شريحة سلمون، كينوا، بروكلي، ليمون، ثوم، زيت زيتون"] },
  { id: "d2", s: "d", e: "🍗", k: 620, p: 42, c: 68, f: 17, t: 40, cu: "me", $: 2, g: ["poultry"],
    n: ["Chicken kabsa", "كبسة دجاج"],
    i: ["Chicken, basmati rice, tomato, onion, kabsa spices, raisins", "دجاج، أرز بسمتي، طماطم، بصل، بهارات الكبسة، زبيب"] },
  { id: "d3", s: "d", e: "🍢", k: 600, p: 38, c: 50, f: 26, t: 30, cu: "me", $: 2, g: ["meat", "gluten", "dairy"],
    n: ["Beef kofta with bulgur & salad", "كفتة لحم مع برغل وسلطة"],
    i: ["Lean minced beef, onion, parsley, bulgur, cucumber-tomato salad, yogurt dip", "لحم مفروم قليل الدهن، بصل، بقدونس، برغل، سلطة خيار وطماطم، صلصة زبادي"] },
  { id: "d4", s: "d", e: "🍗", k: 520, p: 44, c: 48, f: 14, t: 30, cu: "west", $: 1, g: ["poultry"],
    n: ["Grilled chicken, sweet potato & green beans", "دجاج مشوي مع بطاطا حلوة وفاصوليا خضراء"],
    i: ["Chicken breast, sweet potato, green beans, olive oil, paprika", "صدر دجاج، بطاطا حلوة، فاصوليا خضراء، زيت زيتون، بابريكا"] },
  { id: "d5", s: "d", e: "🍛", k: 540, p: 22, c: 84, f: 12, t: 30, cu: "asian", $: 1, g: ["legume", "spicy"],
    n: ["Lentil & vegetable curry with rice", "كاري العدس والخضار مع الأرز"],
    i: ["Red lentils, spinach, tomato, curry spices, light coconut milk, basmati rice", "عدس أحمر، سبانخ، طماطم، بهارات كاري، حليب جوز هند خفيف، أرز بسمتي"] },
  { id: "d6", s: "d", e: "🍤", k: 500, p: 34, c: 62, f: 11, t: 20, cu: "asian", $: 2, g: ["shellfish", "soy", "gluten"],
    n: ["Shrimp & vegetable stir-fry", "روبيان سوتيه بالخضار"],
    i: ["Shrimp, mixed vegetables, garlic, ginger, soy sauce, jasmine rice", "روبيان، خضار مشكلة، ثوم، زنجبيل، صلصة صويا، أرز ياسمين"] },
  { id: "d7", s: "d", e: "🌶️", k: 560, p: 40, c: 52, f: 19, t: 40, cu: "mex", $: 1, g: ["meat", "legume", "spicy"],
    n: ["Beef & bean chili", "تشيلي اللحم والفاصوليا"],
    i: ["Lean minced beef, kidney beans, tomato, onion, chili spices, rice", "لحم مفروم قليل الدهن، فاصوليا حمراء، طماطم، بصل، بهارات حارة، أرز"] },
  { id: "d8", s: "d", e: "🫑", k: 500, p: 22, c: 64, f: 17, t: 40, cu: "mex", $: 1, g: ["legume", "dairy"],
    n: ["Stuffed peppers with rice, beans & cheese", "فلفل محشي بالأرز والفاصوليا والجبن"],
    i: ["Bell peppers, rice, black beans, tomato, cumin, grated cheese", "فلفل رومي، أرز، فاصوليا سوداء، طماطم، كمون، جبن مبشور"] },
  { id: "d9", s: "d", e: "🍝", k: 620, p: 40, c: 74, f: 16, t: 30, cu: "med", $: 1, g: ["poultry", "gluten"],
    n: ["Whole-wheat pasta with turkey bolognese", "معكرونة قمح كامل بصلصة الديك الرومي"],
    i: ["Whole-wheat pasta, minced turkey, tomato sauce, onion, garlic, basil", "معكرونة قمح كامل، ديك رومي مفروم، صلصة طماطم، بصل، ثوم، ريحان"] },
  { id: "d10", s: "d", e: "🐟", k: 480, p: 38, c: 46, f: 14, t: 30, cu: "med", $: 2, g: ["fish"],
    n: ["Baked cod with potatoes & vegetables", "سمك القد بالفرن مع البطاطا والخضار"],
    i: ["Cod fillet, baby potatoes, zucchini, cherry tomatoes, lemon, olive oil", "شريحة سمك قد، بطاطا صغيرة، كوسا، طماطم كرزية، ليمون، زيت زيتون"] },
  { id: "d11", s: "d", e: "🥢", k: 520, p: 26, c: 66, f: 16, t: 25, cu: "asian", $: 1, g: ["soy", "sesame", "gluten"],
    n: ["Tofu teriyaki with brown rice", "توفو ترياكي مع أرز بني"],
    i: ["Firm tofu, teriyaki sauce, brown rice, bok choy, sesame seeds", "توفو صلب، صلصة ترياكي، أرز بني، ملفوف صيني، بذور سمسم"] },
  { id: "d12", s: "d", e: "🍆", k: 480, p: 22, c: 48, f: 21, t: 45, cu: "med", $: 1, g: ["legume", "dairy"],
    n: ["Eggplant & lentil bake", "صينية الباذنجان والعدس"],
    i: ["Eggplant, green lentils, tomato sauce, onion, cinnamon, yogurt topping", "باذنجان، عدس أخضر، صلصة طماطم، بصل، قرفة، زبادي للتزيين"] },
  { id: "d13", s: "d", e: "🌮", k: 580, p: 40, c: 56, f: 20, t: 25, cu: "mex", $: 2, g: ["poultry", "gluten", "spicy"],
    n: ["Chicken fajitas", "فاهيتا الدجاج"],
    i: ["Chicken strips, peppers, onion, fajita spices, 2 flour tortillas, salsa", "شرائح دجاج، فلفل، بصل، بهارات فاهيتا، تورتيلا قمح، صلصة سالسا"] },
  { id: "d14", s: "d", e: "🍄", k: 540, p: 18, c: 78, f: 16, t: 40, cu: "med", $: 2, g: ["dairy", "mushroom"],
    n: ["Mushroom & spinach risotto", "ريزوتو الفطر والسبانخ"],
    i: ["Arborio rice, mushrooms, spinach, onion, vegetable stock, parmesan", "أرز أربوريو، فطر، سبانخ، بصل، مرق خضار، جبن بارميزان"] },
  { id: "d15", s: "d", e: "🍲", k: 620, p: 38, c: 62, f: 23, t: 60, cu: "me", $: 3, g: ["meat", "gluten", "legume"],
    n: ["Lamb & vegetable tagine with couscous", "طاجين اللحم بالخضار مع الكسكس"],
    i: ["Lean lamb, carrot, zucchini, chickpeas, ras el hanout, couscous", "لحم ضأن قليل الدهن، جزر، كوسا، حمص، رأس الحانوت، كسكس"] },
  { id: "d16", s: "d", e: "🥘", k: 500, p: 20, c: 82, f: 10, t: 25, cu: "me", $: 1, g: ["legume"],
    n: ["Chickpea & spinach stew with rice", "يخنة الحمص والسبانخ مع الأرز"],
    i: ["Chickpeas, spinach, tomato, garlic, cumin, basmati rice", "حمص، سبانخ، طماطم، ثوم، كمون، أرز بسمتي"] },
  { id: "d17", s: "d", e: "🍋", k: 580, p: 40, c: 58, f: 20, t: 30, cu: "med", $: 1, g: ["poultry"],
    n: ["Lemon-herb chicken with rice & salad", "دجاج بالليمون والأعشاب مع أرز وسلطة"],
    i: ["Chicken thighs, lemon, garlic, herbs, basmati rice, green salad", "أفخاذ دجاج، ليمون، ثوم، أعشاب، أرز بسمتي، سلطة خضراء"] },
  { id: "d18", s: "d", e: "🥕", k: 520, p: 22, c: 74, f: 15, t: 30, cu: "med", $: 1, g: ["legume"],
    n: ["Roasted vegetable & lentil quinoa bowl", "طبق الكينوا بالعدس والخضار المشوية"],
    i: ["Quinoa, green lentils, roasted carrot, zucchini and red onion, lemon-herb olive oil", "كينوا، عدس أخضر، جزر وكوسا وبصل أحمر مشوي، زيت زيتون بالليمون والأعشاب"] },
  { id: "d19", s: "d", e: "🥥", k: 540, p: 18, c: 78, f: 17, t: 25, cu: "asian", $: 1, g: ["legume"],
    n: ["Mild coconut chickpea stew with rice", "يخنة الحمص بجوز الهند مع الأرز"],
    i: ["Chickpeas, light coconut milk, spinach, sweet potato, ginger, turmeric, jasmine rice", "حمص، حليب جوز هند خفيف، سبانخ، بطاطا حلوة، زنجبيل، كركم، أرز ياسمين"] },
  { id: "d20", s: "d", e: "🥔", k: 500, p: 20, c: 70, f: 15, t: 15, cu: "west", $: 1, g: ["legume"],
    n: ["Loaded baked potato with beans & greens", "بطاطا مشوية محشوة بالفاصوليا والخضار"],
    i: ["Microwave-baked potato, white beans, sautéed kale, garlic, olive oil, lemon", "بطاطا مخبوزة بالميكروويف، فاصوليا بيضاء، كيل مقلي، ثوم، زيت زيتون، ليمون"] },
  { id: "d21", s: "d", e: "🍤", k: 520, p: 36, c: 60, f: 14, t: 15, cu: "med", $: 2, g: ["shellfish"],
    n: ["Garlic shrimp with rice & peas", "روبيان بالثوم مع الأرز والبازلاء"],
    i: ["Shrimp, garlic, olive oil, microwave rice, peas, lemon", "روبيان، ثوم، زيت زيتون، أرز جاهز، بازلاء، ليمون"] },
  { id: "d22", s: "d", e: "🥩", k: 580, p: 42, c: 56, f: 20, t: 15, cu: "me", $: 2, g: ["meat", "gluten"],
    n: ["Steak strips with couscous & salad", "شرائح ستيك مع كسكس وسلطة"],
    i: ["Lean steak strips, couscous, cucumber, tomato, parsley, olive oil", "شرائح ستيك قليل الدهن، كسكس، خيار، طماطم، بقدونس، زيت زيتون"] },
  { id: "d23", s: "d", e: "🐟", k: 560, p: 36, c: 52, f: 22, t: 15, cu: "med", $: 3, g: ["fish"],
    n: ["Quick salmon & rice bowl", "طبق أرز سريع بالسلمون"],
    i: ["Pan-seared salmon, microwave rice, cucumber, spinach, lemon", "سلمون محمّر في المقلاة، أرز جاهز، خيار، سبانخ، ليمون"] },
  { id: "d24", s: "d", e: "🍳", k: 500, p: 24, c: 42, f: 26, t: 15, cu: "med", $: 1, g: ["egg"],
    n: ["Potato omelette with green salad", "عجة البطاطا مع سلطة خضراء"],
    i: ["3 eggs, boiled potato, onion, olive oil, green salad", "3 بيضات، بطاطا مسلوقة، بصل، زيت زيتون، سلطة خضراء"] },
  { id: "d25", s: "d", e: "🥙", k: 600, p: 44, c: 54, f: 22, t: 10, cu: "me", $: 2, g: ["poultry", "legume", "sesame", "gluten"],
    n: ["Chicken & hummus plate with pita", "طبق دجاج وحمص مع خبز عربي"],
    i: ["Grilled chicken strips, hummus, pita, cucumber, tomato, pickles", "شرائح دجاج مشوي، حمص بالطحينة، خبز عربي، خيار، طماطم، مخلل"] },
  { id: "d26", s: "d", e: "🫓", k: 560, p: 26, c: 64, f: 20, t: 15, cu: "mex", $: 1, g: ["legume", "gluten", "dairy"],
    n: ["Black bean & cheese quesadillas", "كاساديا الفاصوليا السوداء والجبن"],
    i: ["2 flour tortillas, black beans, cheese, peppers, salsa", "تورتيلا قمح، فاصوليا سوداء، جبن، فلفل، صلصة سالسا"] },
  { id: "d27", s: "d", e: "🥑", k: 540, p: 16, c: 80, f: 17, t: 10, cu: "mex", $: 1, g: ["legume", "avocado"],
    n: ["Rice & bean bowl with avocado salsa", "طبق الأرز والفاصوليا مع سالسا الأفوكادو"],
    i: ["Microwave rice, kidney beans, avocado, corn, lime, coriander", "أرز جاهز، فاصوليا حمراء، أفوكادو، ذرة، ليمون أخضر، كزبرة"] },

  { id: "d28", s: "d", e: "🍗", k: 620, p: 44, c: 70, f: 18, t: 45, cu: "me", $: 2, g: ["poultry"],
    n: ["Chicken mandi with rice", "مندي دجاج"],
    i: ["Chicken leg, basmati rice, mandi spices, onion, tomato-chili dip", "فخذ دجاج، أرز بسمتي، بهارات المندي، بصل، صلصة طماطم حارة خفيفة"] },
  { id: "d29", s: "d", e: "🥬", k: 540, p: 40, c: 58, f: 16, t: 40, cu: "me", $: 1, g: ["poultry"],
    n: ["Molokhia with chicken & rice", "ملوخية بالدجاج مع أرز"],
    i: ["Molokhia leaves, chicken breast, garlic, coriander, chicken broth, rice, lemon", "ملوخية، صدر دجاج، ثوم، كزبرة، مرق دجاج، أرز، ليمون"] },
  { id: "d30", s: "d", e: "🐟", k: 510, p: 40, c: 40, f: 21, t: 30, cu: "me", $: 2, g: ["fish", "sesame"],
    n: ["Baked fish with tahini & roasted potatoes", "سمك بالطحينة مع بطاطا مشوية"],
    i: ["White fish fillet, tahini-lemon sauce, roasted potatoes, parsley", "شريحة سمك أبيض، صلصة طحينة بالليمون، بطاطا مشوية، بقدونس"] },
  { id: "d31", s: "d", e: "🥒", k: 430, p: 10, c: 76, f: 10, t: 50, cu: "me", $: 1, g: [],
    n: ["Vegan stuffed zucchini (koosa mahshi)", "كوسا محشي بالأرز (نباتي)"],
    i: ["Zucchini stuffed with rice, tomato, parsley and mint, cooked in tomato sauce", "كوسا محشوة بالأرز والطماطم والبقدونس والنعناع، مطبوخة بصلصة الطماطم"] },
  { id: "d32", s: "d", e: "🍢", k: 480, p: 48, c: 18, f: 24, t: 25, cu: "me", $: 2, g: ["poultry"],
    n: ["Shish tawook with garlic sauce & salad", "شيش طاووق مع ثومية وسلطة"],
    i: ["Marinated chicken skewers, toum (garlic sauce), grilled vegetables, green salad", "أسياخ دجاج متبلة، ثومية، خضار مشوية، سلطة خضراء"] },
  { id: "d33", s: "d", e: "🍗", k: 480, p: 44, c: 22, f: 24, t: 35, cu: "med", $: 1, g: ["poultry"],
    n: ["Chicken & vegetable traybake", "صينية دجاج وخضار بالفرن"],
    i: ["Chicken thighs, zucchini, peppers, red onion, olive oil, oregano, lemon", "أفخاذ دجاج، كوسا، فلفل، بصل أحمر، زيت زيتون، أوريغانو، ليمون"] },
  { id: "d34", s: "d", e: "🍲", k: 480, p: 24, c: 66, f: 13, t: 35, cu: "med", $: 1, g: ["legume", "dairy", "gluten"],
    n: ["Greek lentil soup with feta & bread", "شوربة العدس اليونانية مع فيتا"],
    i: ["Brown lentils, tomato, garlic, bay leaf, a little vinegar, 30g feta, whole-grain bread", "عدس بني، طماطم، ثوم، ورق غار، قليل من الخل، 30غ فيتا، خبز حبوب كاملة"] },
  { id: "d35", s: "d", e: "🥒", k: 460, p: 40, c: 20, f: 24, t: 30, cu: "med", $: 2, g: ["poultry", "egg"],
    n: ["Zucchini noodles with turkey meatballs", "نودلز الكوسا مع كرات الديك الرومي"],
    i: ["Spiralised zucchini, turkey meatballs (with egg), tomato sauce, basil", "كوسا مقطعة كالنودلز، كرات ديك رومي (بالبيض)، صلصة طماطم، ريحان"] },
  { id: "d36", s: "d", e: "🥦", k: 580, p: 40, c: 60, f: 19, t: 20, cu: "asian", $: 2, g: ["meat", "soy", "gluten"],
    n: ["Beef & broccoli with rice", "لحم بالبروكلي مع أرز"],
    i: ["Lean beef strips, broccoli, garlic, ginger, soy sauce, rice", "شرائح لحم قليل الدهن، بروكلي، ثوم، زنجبيل، صلصة صويا، أرز"] },
  { id: "d37", s: "d", e: "🌿", k: 560, p: 40, c: 62, f: 16, t: 15, cu: "asian", $: 1, g: ["poultry", "soy", "gluten", "spicy", "fish"],
    n: ["Thai basil chicken with rice", "دجاج بالريحان التايلاندي مع أرز"],
    i: ["Minced chicken, Thai basil, chili, garlic, soy and fish sauce, jasmine rice", "دجاج مفروم، ريحان تايلاندي، فلفل حار، ثوم، صلصة صويا وصلصة سمك، أرز ياسمين"] },
  { id: "d38", s: "d", e: "🥚", k: 340, p: 18, c: 20, f: 21, t: 15, cu: "asian", $: 1, g: ["egg", "soy", "gluten"],
    n: ["Cauliflower fried 'rice' with eggs", "أرز القرنبيط المقلي بالبيض"],
    i: ["Riced cauliflower, 2 eggs, peas, carrot, spring onion, soy sauce", "قرنبيط مفروم كالأرز، بيضتان، بازلاء، جزر، بصل أخضر، صلصة صويا"] },
  { id: "d39", s: "d", e: "🐟", k: 570, p: 38, c: 54, f: 22, t: 25, cu: "asian", $: 3, g: ["fish", "soy"],
    n: ["Miso-glazed salmon with rice & greens", "سلمون بالميسو مع أرز وخضار"],
    i: ["Salmon fillet, miso glaze, rice, bok choy, spring onion", "شريحة سلمون، صلصة ميسو، أرز، ملفوف صيني، بصل أخضر"] },
  { id: "d40", s: "d", e: "🥬", k: 420, p: 38, c: 14, f: 24, t: 20, cu: "mex", $: 1, g: ["poultry", "dairy", "spicy"],
    n: ["Turkey taco lettuce wraps", "تاكو الديك الرومي بأوراق الخس"],
    i: ["Spiced minced turkey, lettuce cups, tomato salsa, grated cheese, lime", "ديك رومي مفروم متبّل، أوراق خس، صلصة طماطم، جبن مبشور، ليمون أخضر"] },
  { id: "d41", s: "d", e: "🥭", k: 490, p: 32, c: 56, f: 15, t: 20, cu: "mex", $: 2, g: ["shellfish"],
    n: ["Shrimp tacos with mango salsa", "تاكو الروبيان مع سالسا المانجو"],
    i: ["Grilled shrimp, 3 corn tortillas, mango-onion salsa, cabbage, lime", "روبيان مشوي، 3 تورتيلا ذرة، سالسا المانجو والبصل، ملفوف، ليمون أخضر"] },
  { id: "d42", s: "d", e: "🌯", k: 560, p: 24, c: 70, f: 20, t: 40, cu: "mex", $: 1, g: ["legume", "dairy", "spicy"],
    n: ["Bean & vegetable enchiladas", "إنشيلادا الفاصوليا والخضار"],
    i: ["Corn tortillas filled with beans, peppers and spinach, red chili sauce, cheese", "تورتيلا ذرة محشوة بالفاصوليا والفلفل والسبانخ، صلصة فلفل أحمر، جبن"] },
  { id: "d43", s: "d", e: "🍔", k: 600, p: 40, c: 58, f: 22, t: 30, cu: "west", $: 2, g: ["poultry", "gluten", "egg"],
    n: ["Turkey burger with sweet potato wedges", "برغر الديك الرومي مع بطاطا حلوة"],
    i: ["Turkey patty, whole-wheat bun, lettuce, tomato, baked sweet potato wedges", "قرص ديك رومي، خبز برغر قمح كامل، خس، طماطم، أصابع بطاطا حلوة بالفرن"] },
  { id: "d44", s: "d", e: "🍗", k: 520, p: 46, c: 52, f: 14, t: 35, cu: "west", $: 1, g: ["poultry", "dairy"],
    n: ["Baked chicken with mashed potatoes & peas", "صدر دجاج بالفرن مع بطاطا مهروسة وبازلاء"],
    i: ["Chicken breast, potatoes mashed with milk, peas, herb sauce", "صدر دجاج، بطاطا مهروسة بالحليب، بازلاء، صلصة أعشاب"] },
  { id: "d45", s: "d", e: "🥧", k: 480, p: 20, c: 74, f: 11, t: 45, cu: "west", $: 1, g: ["legume"],
    n: ["Lentil shepherd's pie (vegan)", "فطيرة الراعي بالعدس (نباتية)"],
    i: ["Green lentils, carrot, onion, peas, tomato paste, mashed potato top (olive oil)", "عدس أخضر، جزر، بصل، بازلاء، معجون طماطم، طبقة بطاطا مهروسة بزيت الزيتون"] },
  { id: "d46", s: "d", e: "🥩", k: 540, p: 46, c: 16, f: 32, t: 25, cu: "west", $: 3, g: ["meat"],
    n: ["Steak with salad & roasted vegetables", "ستيك مع سلطة وخضار مشوية"],
    i: ["Sirloin steak, roasted peppers and zucchini, green salad, olive oil", "ستيك سيرلوين، فلفل وكوسا مشوية، سلطة خضراء، زيت زيتون"] },
  { id: "d47", s: "d", e: "🐟", k: 560, p: 40, c: 7, f: 41, t: 20, cu: "med", $: 3, g: ["fish", "dairy"],
    n: ["Garlic-butter salmon with asparagus", "سلمون بزبدة الثوم مع الهليون"],
    i: ["Salmon fillet, butter, garlic, lemon, roasted asparagus", "شريحة سلمون، زبدة، ثوم، ليمون، هليون مشوي"] },
  { id: "d48", s: "d", e: "🍖", k: 610, p: 42, c: 8, f: 46, t: 25, cu: "med", $: 3, g: ["meat", "dairy"],
    n: ["Lamb chops with tzatziki & Greek salad", "ريش لحم ضأن مع تزاتزيكي وسلطة يونانية"],
    i: ["Grilled lamb chops, tzatziki, cucumber, tomato, olives, feta, olive oil", "ريش ضأن مشوية، تزاتزيكي، خيار، طماطم، زيتون، فيتا، زيت زيتون"] },
  { id: "d49", s: "d", e: "🍄", k: 575, p: 42, c: 9, f: 41, t: 30, cu: "west", $: 1, g: ["poultry", "dairy", "mushroom"],
    n: ["Chicken thighs in creamy mushroom sauce", "أفخاذ دجاج بصلصة الفطر الكريمية"],
    i: ["Chicken thighs, mushrooms, cream, garlic, thyme, steamed broccoli", "أفخاذ دجاج، فطر، كريمة طبخ، ثوم، زعتر بري، بروكلي على البخار"] },
  { id: "d50", s: "d", e: "🍤", k: 425, p: 34, c: 10, f: 28, t: 15, cu: "asian", $: 2, g: ["shellfish", "soy"],
    n: ["Shrimp stir-fry with zucchini noodles", "روبيان سوتيه مع نودلز الكوسا"],
    i: ["Shrimp, spiralised zucchini, garlic, ginger, tamari (gluten-free soy sauce), oil", "روبيان، كوسا مقطعة كالنودلز، ثوم، زنجبيل، صلصة تاماري (صويا خالية من الغلوتين)، زيت"] },
  { id: "d51", s: "d", e: "🥩", k: 565, p: 40, c: 12, f: 40, t: 30, cu: "me", $: 2, g: ["meat"],
    n: ["Kabsa-spiced beef with cauliflower rice", "لحم ببهارات الكبسة مع أرز القرنبيط"],
    i: ["Beef cubes, kabsa spices, onion, riced cauliflower, olive oil, parsley", "مكعبات لحم، بهارات الكبسة، بصل، قرنبيط مفروم كالأرز، زيت زيتون، بقدونس"] },
  { id: "d52", s: "d", e: "🍆", k: 450, p: 26, c: 10, f: 34, t: 40, cu: "med", $: 1, g: ["dairy", "egg"],
    n: ["Keto eggplant & cheese bake", "صينية الباذنجان بالجبن (كيتو)"],
    i: ["Sliced eggplant, ricotta mixed with egg, mozzarella, herb sauce, parmesan", "شرائح باذنجان، ريكوتا مخلوطة بالبيض، موزاريلا، صلصة أعشاب، بارميزان"] },
  { id: "d53", s: "d", e: "🥥", k: 435, p: 22, c: 10, f: 34, t: 20, cu: "asian", $: 1, g: ["soy", "spicy"],
    n: ["Tofu & green bean coconut curry (no rice)", "كاري التوفو والفاصوليا الخضراء بجوز الهند"],
    i: ["Firm tofu, green beans, coconut milk, curry paste, spinach", "توفو صلب، فاصوليا خضراء، حليب جوز هند، معجون كاري، سبانخ"] },
  { id: "d54", s: "d", e: "🌶️", k: 550, p: 44, c: 10, f: 37, t: 20, cu: "mex", $: 2, g: ["poultry", "avocado", "dairy", "spicy"],
    n: ["Chicken fajita bowl with guacamole (no rice)", "طبق فاهيتا الدجاج مع جواكامولي (بدون أرز)"],
    i: ["Chicken strips, peppers, onion, fajita spices, guacamole, cheese, lettuce", "شرائح دجاج، فلفل، بصل، بهارات فاهيتا، جواكامولي، جبن، خس"] },
  { id: "d55", s: "d", e: "🍲", k: 640, p: 40, c: 70, f: 22, t: 60, cu: "me", $: 2, g: ["poultry"],
    n: ["Maqluba (upside-down chicken & rice)", "مقلوبة دجاج"],
    i: ["Chicken, rice, eggplant and cauliflower cooked in a little oil, maqluba spices", "دجاج، أرز، باذنجان وقرنبيط بقليل من الزيت، بهارات المقلوبة"] },
  { id: "d56", s: "d", e: "🌾", k: 590, p: 42, c: 62, f: 19, t: 45, cu: "me", $: 2, g: ["poultry", "gluten"],
    n: ["Freekeh with chicken", "فريكة بالدجاج"],
    i: ["Freekeh cooked in chicken broth, chicken pieces, onion, cinnamon, allspice", "فريكة مطبوخة بمرق الدجاج، قطع دجاج، بصل، قرفة، بهارات مشكلة"] },
  { id: "d57", s: "d", e: "🍅", k: 610, p: 36, c: 62, f: 24, t: 40, cu: "me", $: 2, g: ["meat"],
    n: ["Daoud basha (meatballs in tomato sauce) with rice", "داود باشا مع أرز"],
    i: ["Lean beef meatballs, onion, tomato sauce, pomegranate molasses, rice", "كرات لحم قليل الدهن، بصل، صلصة طماطم، دبس رمان، أرز"] },
  { id: "d58", s: "d", e: "🥘", k: 550, p: 34, c: 62, f: 18, t: 45, cu: "me", $: 1, g: ["meat"],
    n: ["Okra stew (bamia) with beef & rice", "بامية باللحم مع أرز"],
    i: ["Okra, lean beef cubes, tomato, garlic, coriander, rice", "بامية، مكعبات لحم قليل الدهن، طماطم، ثوم، كزبرة، أرز"] },
  { id: "d59", s: "d", e: "🍆", k: 480, p: 12, c: 62, f: 20, t: 50, cu: "me", $: 1, g: ["gluten"],
    n: ["Imam bayildi (stuffed eggplant) with bulgur", "باذنجان محشي بالخضار (إمام بايلدي) مع برغل"],
    i: ["Eggplant stuffed with onion, tomato, garlic and parsley in olive oil, bulgur pilaf", "باذنجان محشي بالبصل والطماطم والثوم والبقدونس بزيت الزيتون، برغل"] },
  { id: "d60", s: "d", e: "🍤", k: 525, p: 36, c: 50, f: 20, t: 25, cu: "med", $: 2, g: ["shellfish", "dairy", "gluten"],
    n: ["Shrimp saganaki with feta & orzo", "روبيان ساغاناكي بالفيتا مع لسان عصفور"],
    i: ["Shrimp in tomato sauce with garlic, baked with feta, orzo", "روبيان بصلصة الطماطم والثوم، مخبوز مع الفيتا، لسان عصفور"] },
  { id: "d61", s: "d", e: "🍗", k: 550, p: 42, c: 50, f: 20, t: 35, cu: "med", $: 1, g: ["poultry", "legume"],
    n: ["Spanish chicken & chickpea stew", "يخنة الدجاج والحمص الإسبانية"],
    i: ["Chicken thighs, chickpeas, smoked paprika, tomato, spinach, garlic", "أفخاذ دجاج، حمص، بابريكا مدخنة، طماطم، سبانخ، ثوم"] },
  { id: "d62", s: "d", e: "🐟", k: 490, p: 40, c: 40, f: 19, t: 35, cu: "med", $: 2, g: ["fish"],
    n: ["Baked sea bream with herbs & potatoes", "سمك دنيس بالفرن مع الأعشاب والبطاطا"],
    i: ["Whole sea bream, lemon, garlic, herbs, olive oil, sliced potatoes", "سمكة دنيس كاملة، ليمون، ثوم، أعشاب، زيت زيتون، شرائح بطاطا"] },
  { id: "d63", s: "d", e: "🥕", k: 470, p: 16, c: 52, f: 22, t: 50, cu: "med", $: 1, g: ["dairy", "gluten"],
    n: ["Briam (Greek roasted vegetables) with feta", "بريام (خضار يونانية بالفرن) مع فيتا"],
    i: ["Potato, zucchini, eggplant, peppers, tomato and olive oil, feta, crusty bread", "بطاطا، كوسا، باذنجان، فلفل، طماطم وزيت زيتون، فيتا، خبز"] },
  { id: "d64", s: "d", e: "🍢", k: 595, p: 40, c: 10, f: 44, t: 25, cu: "me", $: 2, g: ["meat", "sesame"],
    n: ["Lamb kofta with grilled vegetables & tahini (keto)", "كفتة ضأن مع خضار مشوية وطحينة (كيتو)"],
    i: ["Lamb kofta, grilled zucchini, peppers and onion, tahini sauce, no bread", "كفتة لحم ضأن، كوسا وفلفل وبصل مشوي، صلصة طحينة، بدون خبز"] },
  { id: "d65", s: "d", e: "🍗", k: 520, p: 48, c: 10, f: 32, t: 25, cu: "med", $: 2, g: ["poultry", "dairy"],
    n: ["Chicken souvlaki plate with tzatziki (keto)", "طبق سوفلاكي الدجاج مع تزاتزيكي (كيتو)"],
    i: ["Chicken skewers, tzatziki, Greek salad, no pita", "أسياخ دجاج، تزاتزيكي، سلطة يونانية، بدون خبز"] },
  { id: "d66", s: "d", e: "🧆", k: 520, p: 18, c: 62, f: 22, t: 15, cu: "me", $: 1, g: ["legume", "sesame", "gluten"],
    n: ["Hummus bowl with roasted vegetables", "طبق حمص مع خضار مشوية"],
    i: ["Hummus, roasted cauliflower, peppers and chickpeas, olive oil, whole-wheat pita", "حمص بالطحينة، قرنبيط وفلفل وحمص مشوي، زيت زيتون، خبز أسمر"] },
  // Snacks
  { id: "s1", s: "s", e: "🍎", k: 230, p: 6, c: 25, f: 13, t: 0, cu: "west", $: 1, g: ["nuts"],
    n: ["Apple & almonds", "تفاح ولوز"], i: ["1 apple, 20 almonds", "تفاحة، 20 حبة لوز"] },
  { id: "s2", s: "s", e: "🥕", k: 200, p: 8, c: 20, f: 10, t: 5, cu: "me", $: 1, g: ["legume", "sesame"],
    n: ["Hummus & veggie sticks", "حمص مع أصابع الخضار"],
    i: ["4 tbsp hummus, carrot, cucumber and pepper sticks", "4 ملاعق حمص بالطحينة، أصابع جزر وخيار وفلفل"] },
  { id: "s3", s: "s", e: "🫐", k: 160, p: 17, c: 18, f: 2, t: 0, cu: "med", $: 1, g: ["dairy"],
    n: ["Greek yogurt with berries", "زبادي يوناني مع التوت"], i: ["170g Greek yogurt, berries", "170غ زبادي يوناني، توت"] },
  { id: "s4", s: "s", e: "🥚", k: 160, p: 13, c: 3, f: 10, t: 10, cu: "west", $: 1, g: ["egg"],
    n: ["Boiled eggs & cucumber", "بيض مسلوق مع خيار"], i: ["2 boiled eggs, cucumber, pinch of salt", "بيضتان مسلوقتان، خيار، رشة ملح"] },
  { id: "s5", s: "s", e: "🌴", k: 245, p: 4, c: 38, f: 9, t: 0, cu: "me", $: 1, g: ["nuts"],
    n: ["Dates & walnuts", "تمر وجوز"], i: ["3 dates, 4 walnut halves", "3 تمرات، 4 أنصاف جوز"] },
  { id: "s6", s: "s", e: "🥤", k: 300, p: 30, c: 34, f: 5, t: 5, cu: "west", $: 2, g: ["dairy"],
    n: ["Banana protein smoothie", "سموذي الموز بالبروتين"],
    i: ["Banana, 250ml milk, 1 scoop whey protein", "موزة، 250مل حليب، سكوب واي بروتين"] },
  { id: "s7", s: "s", e: "🫛", k: 190, p: 17, c: 14, f: 8, t: 5, cu: "asian", $: 1, g: ["soy"],
    n: ["Edamame with sea salt", "إدامامي بملح البحر"], i: ["150g edamame, sea salt", "150غ إدامامي، ملح بحري"] },
  { id: "s8", s: "s", e: "🥜", k: 220, p: 6, c: 28, f: 9, t: 0, cu: "west", $: 1, g: ["peanut"],
    n: ["Rice cakes with peanut butter", "كعك الأرز بزبدة الفول السوداني"],
    i: ["2 rice cakes, 1 tbsp peanut butter, banana slices", "كعكتا أرز، ملعقة زبدة فول سوداني، شرائح موز"] },
  { id: "s9", s: "s", e: "🍍", k: 180, p: 18, c: 18, f: 3, t: 0, cu: "west", $: 1, g: ["dairy"],
    n: ["Cottage cheese & pineapple", "جبن كوتيج مع أناناس"], i: ["150g cottage cheese, pineapple", "150غ جبن كوتيج، أناناس"] },
  { id: "s10", s: "s", e: "🧆", k: 180, p: 9, c: 26, f: 5, t: 30, cu: "me", $: 1, g: ["legume"],
    n: ["Crunchy roasted chickpeas", "حمص محمّص مقرمش"], i: ["½ cup chickpeas roasted with paprika", "نصف كوب حمص محمّص بالبابريكا"] },
  { id: "s11", s: "s", e: "🍌", k: 220, p: 8, c: 30, f: 9, t: 0, cu: "west", $: 1, g: [],
    n: ["Banana & pumpkin seeds", "موز وبذور يقطين"], i: ["1 banana, 2 tbsp pumpkin seeds", "موزة، ملعقتان بذور يقطين"] },
  { id: "s12", s: "s", e: "🍉", k: 140, p: 2, c: 31, f: 1, t: 5, cu: "med", $: 1, g: [],
    n: ["Fresh fruit salad with mint", "سلطة فواكه طازجة بالنعناع"], i: ["Watermelon, orange, kiwi, grapes, mint", "بطيخ، برتقال، كيوي، عنب، نعناع"] },
  { id: "s13", s: "s", e: "🥒", k: 170, p: 22, c: 4, f: 7, t: 5, cu: "west", $: 1, g: ["fish", "egg"],
    n: ["Tuna cucumber bites", "قطع خيار بالتونة"], i: ["80g tuna, light mayo, cucumber slices", "80غ تونة، مايونيز خفيف، شرائح خيار"] },
  { id: "s14", s: "s", e: "🍫", k: 160, p: 3, c: 18, f: 9, t: 0, cu: "west", $: 2, g: [],
    n: ["Dark chocolate & strawberries", "شوكولاتة داكنة مع فراولة"], i: ["20g dark chocolate (70%+), strawberries", "20غ شوكولاتة داكنة (70٪+)، فراولة"] },
  { id: "s15", s: "s", e: "🧆", k: 180, p: 10, c: 6, f: 13, t: 0, cu: "me", $: 1, g: ["dairy"],
    n: ["Labneh balls with cucumber", "كرات لبنة مع خيار"], i: ["4 labneh balls in olive oil, cucumber slices", "4 كرات لبنة بزيت الزيتون، شرائح خيار"] },
  { id: "s16", s: "s", e: "🍆", k: 150, p: 4, c: 14, f: 9, t: 5, cu: "me", $: 1, g: ["sesame"],
    n: ["Baba ghanoush with veggie sticks", "بابا غنوج مع أصابع الخضار"], i: ["4 tbsp baba ghanoush, carrot and pepper sticks", "4 ملاعق بابا غنوج، أصابع جزر وفلفل"] },
  { id: "s17", s: "s", e: "🍊", k: 230, p: 7, c: 22, f: 13, t: 0, cu: "me", $: 2, g: ["nuts"],
    n: ["Pistachios & an orange", "فستق حلبي وبرتقالة"], i: ["25g pistachios, 1 orange", "25غ فستق حلبي، برتقالة"] },
  { id: "s18", s: "s", e: "🥣", k: 120, p: 9, c: 8, f: 5, t: 5, cu: "asian", $: 1, g: ["soy"],
    n: ["Miso soup with tofu", "شوربة ميسو بالتوفو"], i: ["Miso paste, hot water, tofu cubes, spring onion", "معجون ميسو، ماء ساخن، مكعبات توفو، بصل أخضر"] },
  { id: "s19", s: "s", e: "🥑", k: 190, p: 3, c: 12, f: 15, t: 10, cu: "mex", $: 2, g: ["avocado"],
    n: ["Guacamole with veggie sticks", "جواكامولي مع أصابع الخضار"], i: ["½ avocado mashed with lime and onion, cucumber and carrot sticks", "نصف أفوكادو مهروس بالليمون والبصل، أصابع خيار وجزر"] },
  { id: "s20", s: "s", e: "🌽", k: 190, p: 6, c: 28, f: 7, t: 10, cu: "mex", $: 1, g: ["dairy", "spicy"],
    n: ["Mexican corn cup", "كوب ذرة مكسيكي"], i: ["Sweetcorn, lime, chili powder, a little feta", "ذرة حلوة، ليمون أخضر، فلفل حار مطحون، قليل من الفيتا"] },
  { id: "s21", s: "s", e: "🫒", k: 170, p: 6, c: 6, f: 14, t: 0, cu: "med", $: 1, g: ["dairy"],
    n: ["Olives, cherry tomatoes & feta", "زيتون وطماطم كرزية وفيتا"], i: ["8 olives, cherry tomatoes, 30g feta", "8 حبات زيتون، طماطم كرزية، 30غ فيتا"] },
  { id: "s22", s: "s", e: "🥓", k: 170, p: 20, c: 3, f: 8, t: 5, cu: "west", $: 2, g: ["poultry", "dairy"],
    n: ["Turkey & cheese roll-ups", "لفائف الديك الرومي والجبن"], i: ["4 slices turkey breast, 2 slices light cheese, cucumber", "4 شرائح صدر ديك رومي، شريحتا جبن خفيف، خيار"] },
  { id: "s23", s: "s", e: "🍿", k: 138, p: 4, c: 26, f: 2, t: 5, cu: "west", $: 1, g: [],
    n: ["Air-popped popcorn", "فشار بدون زيت"], i: ["30g popcorn kernels, popped without oil, pinch of salt", "30غ ذرة فشار بدون زيت، رشة ملح"] },
  { id: "s24", s: "s", e: "🍫", k: 130, p: 25, c: 4, f: 2, t: 2, cu: "west", $: 2, g: ["dairy"],
    n: ["Chocolate protein shake", "مخفوق بروتين بالشوكولاتة"], i: ["1 scoop chocolate whey protein, water, ice", "سكوب واي بروتين بالشوكولاتة، ماء، ثلج"] },
  { id: "s25", s: "s", e: "🥭", k: 115, p: 1, c: 27, f: 1, t: 5, cu: "asian", $: 1, g: ["spicy"],
    n: ["Mango with chili & lime", "مانجو بالليمون والفلفل"], i: ["1 cup mango cubes, lime juice, chili flakes", "كوب مكعبات مانجو، عصير ليمون أخضر، رقائق فلفل"] },
  { id: "s26", s: "s", e: "🍘", k: 190, p: 6, c: 24, f: 8, t: 0, cu: "med", $: 1, g: ["gluten", "legume", "sesame"],
    n: ["Whole-grain crackers with hummus", "مقرمشات حبوب كاملة مع حمص"], i: ["4 whole-grain crackers, 3 tbsp hummus", "4 مقرمشات حبوب كاملة، 3 ملاعق حمص"] },
  { id: "s27", s: "s", e: "🥛", k: 110, p: 7, c: 10, f: 4, t: 2, cu: "me", $: 1, g: ["dairy"],
    n: ["Ayran (yogurt drink) with mint", "لبن عيران بالنعناع"], i: ["200ml yogurt blended with water, salt and dried mint", "200مل زبادي مخفوق مع ماء وملح ونعناع مجفف"] },
  { id: "s28", s: "s", e: "🧀", k: 170, p: 10, c: 2, f: 14, t: 0, cu: "west", $: 1, g: ["dairy"],
    n: ["Cheese cubes & cucumber", "مكعبات جبن مع خيار"], i: ["40g cheddar cubes, cucumber slices", "40غ مكعبات شيدر، شرائح خيار"] },
  { id: "s29", s: "s", e: "🌰", k: 170, p: 6, c: 3, f: 15, t: 0, cu: "west", $: 1, g: ["nuts"],
    n: ["Handful of almonds", "حفنة لوز"], i: ["30g almonds", "30غ لوز"] },
  { id: "s30", s: "s", e: "🥑", k: 155, p: 2, c: 2, f: 15, t: 2, cu: "mex", $: 1, g: ["avocado"],
    n: ["Avocado with salt & lemon", "أفوكادو بالملح والليمون"], i: ["½ avocado, sea salt, lemon, chili flakes", "نصف أفوكادو، ملح بحري، ليمون، رقائق فلفل"] },
  { id: "s31", s: "s", e: "🫒", k: 180, p: 6, c: 3, f: 16, t: 0, cu: "me", $: 1, g: [],
    n: ["Olives & pumpkin seeds", "زيتون وبذور يقطين"], i: ["10 olives, 1 tbsp pumpkin seeds", "10 حبات زيتون، ملعقة بذور يقطين"] },
  { id: "s32", s: "s", e: "🥜", k: 190, p: 7, c: 4, f: 16, t: 2, cu: "west", $: 1, g: ["peanut"],
    n: ["Celery with peanut butter", "كرفس بزبدة الفول السوداني"], i: ["2 celery sticks, 1 tbsp peanut butter (no sugar)", "عودا كرفس، ملعقة زبدة فول سوداني (بدون سكر)"] },
  { id: "s33", s: "s", e: "🍇", k: 180, p: 8, c: 22, f: 7, t: 0, cu: "me", $: 2, g: ["dairy"],
    n: ["Fresh figs with labneh", "تين طازج مع لبنة"], i: ["2 fresh figs, 2 tbsp labneh", "حبتا تين طازج، ملعقتا لبنة"] },
  { id: "s34", s: "s", e: "🌴", k: 220, p: 4, c: 34, f: 8, t: 0, cu: "me", $: 1, g: ["sesame"],
    n: ["Dates with tahini", "تمر بالطحينة"], i: ["3 dates, 1 tsp tahini", "3 تمرات، ملعقة صغيرة طحينة"] },
  { id: "s35", s: "s", e: "🌶️", k: 195, p: 4, c: 14, f: 14, t: 5, cu: "me", $: 2, g: ["nuts", "gluten", "spicy"],
    n: ["Muhammara with veggie sticks", "محمّرة مع أصابع الخضار"], i: ["3 tbsp muhammara (red pepper & walnut dip), carrot and cucumber sticks", "3 ملاعق محمّرة (فلفل أحمر وجوز)، أصابع جزر وخيار"] },
  { id: "s36", s: "s", e: "🥒", k: 120, p: 7, c: 9, f: 6, t: 5, cu: "med", $: 1, g: ["dairy"],
    n: ["Tzatziki with veggie sticks", "تزاتزيكي مع أصابع الخضار"], i: ["4 tbsp tzatziki, cucumber, pepper and carrot sticks", "4 ملاعق تزاتزيكي، أصابع خيار وفلفل وجزر"] },
  { id: "s37", s: "s", e: "🍅", k: 170, p: 10, c: 4, f: 13, t: 5, cu: "med", $: 2, g: ["dairy"],
    n: ["Caprese skewers", "أسياخ كابريزي"], i: ["Mini mozzarella, cherry tomatoes, basil, a drizzle of olive oil", "موزاريلا صغيرة، طماطم كرزية، ريحان، رشة زيت زيتون"] },
  { id: "s38", s: "s", e: "🐟", k: 160, p: 18, c: 2, f: 9, t: 2, cu: "med", $: 1, g: ["fish"],
    n: ["Sardines on cucumber", "سردين على شرائح الخيار"], i: ["1 small can sardines in olive oil, cucumber slices, lemon", "علبة سردين صغيرة بزيت الزيتون، شرائح خيار، ليمون"] },
  { id: "s39", s: "s", e: "🧀", k: 180, p: 12, c: 2, f: 14, t: 5, cu: "me", $: 2, g: ["dairy"],
    n: ["Grilled halloumi bites", "قطع حلوم مشوي"], i: ["50g grilled halloumi, mint, cucumber", "50غ حلوم مشوي، نعناع، خيار"] },
  { id: "s40", s: "s", e: "🍇", k: 180, p: 8, c: 18, f: 9, t: 0, cu: "med", $: 1, g: ["dairy"],
    n: ["Grapes & cheese", "عنب وجبن"], i: ["A small bunch of grapes, 30g white cheese", "عنقود عنب صغير، 30غ جبن أبيض"] },
];
const RECIPE_BY_ID = Object.fromEntries(RECIPES.map((r) => [r.id, r]));

// Simple foods the planner can add to close a calorie or macro gap.
// Values per u grams; max = most units it may add. Same tags as recipes, so the same rules apply.
const ADDONS = [
  { id: "a1", e: "🍗", u: 100, k: 165, p: 31, c: 0, f: 4, max: 2, g: ["poultry"], n: ["grilled chicken breast", "صدر دجاج مشوي"] },
  { id: "a2", e: "🥚", u: 100, k: 52, p: 11, c: 1, f: 0, max: 2.5, g: ["egg"], n: ["egg whites", "بياض البيض"] },
  { id: "a3", e: "🥛", u: 100, k: 59, p: 10, c: 4, f: 0, max: 3, g: ["dairy"], n: ["Greek yogurt (0% fat)", "زبادي يوناني خالي الدسم"] },
  { id: "a4", e: "🥤", u: 30, k: 120, p: 24, c: 3, f: 2, max: 3, kind: "powder", g: ["dairy"], n: ["whey protein powder", "واي بروتين (بودرة)"] },
  { id: "a5", e: "🌱", u: 30, k: 115, p: 24, c: 2, f: 2, max: 3, kind: "powder", g: [], n: ["pea protein powder", "بروتين البازلاء (بودرة)"] },
  { id: "a6", e: "🍱", u: 100, k: 145, p: 16, c: 3, f: 9, max: 2, g: ["soy"], n: ["firm tofu", "توفو صلب"] },
  { id: "a7", e: "🐟", u: 100, k: 116, p: 26, c: 0, f: 1, max: 2, g: ["fish"], n: ["canned tuna in water", "تونة معلبة بالماء"] },
  { id: "a8", e: "🍚", u: 100, k: 130, p: 3, c: 28, f: 0, max: 3, g: [], n: ["cooked rice", "أرز مطبوخ"] },
  { id: "a9", e: "🥣", u: 40, k: 150, p: 5, c: 27, f: 3, max: 2, g: ["gluten"], n: ["oats", "شوفان"] },
  { id: "a10", e: "🍌", u: 120, k: 105, p: 1, c: 27, f: 0, max: 2, g: [], n: ["banana", "موز"] },
  { id: "a11", e: "🥔", u: 100, k: 87, p: 2, c: 20, f: 0, max: 3, g: [], n: ["boiled potato", "بطاطا مسلوقة"] },
  { id: "a12", e: "🫒", u: 10, k: 90, p: 0, c: 0, f: 10, max: 4, g: [], n: ["olive oil", "زيت زيتون"] },
  { id: "a13", e: "🌰", u: 15, k: 87, p: 3, c: 3, f: 7, max: 3, g: ["nuts"], n: ["almonds", "لوز"] },
  { id: "a14", e: "🥜", u: 15, k: 90, p: 4, c: 3, f: 8, max: 2, g: ["peanut"], n: ["peanut butter", "زبدة الفول السوداني"] },
  { id: "a15", e: "🥑", u: 50, k: 80, p: 1, c: 4, f: 7, max: 2, g: ["avocado"], n: ["avocado", "أفوكادو"] },
  { id: "a16", e: "🎃", u: 15, k: 85, p: 4, c: 2, f: 7, max: 3, g: [], n: ["pumpkin seeds", "بذور اليقطين"] },
  { id: "a17", e: "🫘", u: 100, k: 116, p: 9, c: 20, f: 0, max: 2, g: ["legume"], n: ["cooked lentils", "عدس مطبوخ"] },
  { id: "a18", e: "🍞", u: 40, k: 100, p: 5, c: 17, f: 1, max: 2, g: ["gluten"], n: ["whole-wheat bread", "خبز القمح الكامل"] },
];

// ---------- Ingredient amounts ----------
// Shared ingredient names [English, Arabic]. Meat, fish and grains are raw / uncooked weights.
const ING = {
  egg: ["egg", "بيضة"], eggw: ["egg white", "بياض بيضة"],
  chick_b: ["chicken breast (raw)", "صدر دجاج (نيء)"], chick_t: ["boneless chicken thigh (raw)", "فخذ دجاج بدون عظم (نيء)"],
  chick_leg: ["chicken leg, bone-in (raw)", "فخذ دجاج كامل بالعظم (نيء)"], chick_min: ["minced chicken (raw)", "دجاج مفروم (نيء)"],
  turkey_min: ["minced turkey (raw)", "ديك رومي مفروم (نيء)"], turkey_sl: ["turkey breast slices", "شرائح صدر ديك رومي"],
  beef_lean: ["lean beef (raw)", "لحم بقري قليل الدهن (نيء)"], beef_min: ["lean minced beef (raw)", "لحم بقري مفروم قليل الدهن (نيء)"],
  lamb: ["lean lamb (raw)", "لحم ضأن قليل الدهن (نيء)"], lamb_min: ["minced lamb (raw)", "لحم ضأن مفروم (نيء)"],
  lamb_chop: ["lamb chops (raw)", "ريش ضأن (نيئة)"], steak: ["sirloin steak (raw)", "ستيك سيرلوين (نيء)"], sujuk: ["beef sujuk", "سجق لحم"],
  salmon: ["salmon fillet (raw)", "شريحة سلمون (نيئة)"], smsalmon: ["smoked salmon", "سلمون مدخن"],
  whitefish: ["white fish fillet (raw)", "شريحة سمك أبيض (نيئة)"], cod: ["cod fillet (raw)", "شريحة سمك قد (نيئة)"],
  bream: ["sea bream fillet (raw)", "فيليه سمك دنيس (نيء)"], tuna: ["canned tuna in water, drained", "تونة معلبة بالماء (مصفّاة)"],
  sardine: ["can of sardines in olive oil", "علبة سردين بزيت الزيتون"], shrimp: ["peeled shrimp (raw)", "روبيان مقشّر (نيء)"],
  tofu: ["firm tofu", "توفو صلب"], edamame: ["edamame", "إدامامي"], whey: ["whey protein powder", "بودرة واي بروتين"],
  pea_prot: ["pea protein powder", "بودرة بروتين البازلاء"],
  gyog: ["Greek yogurt (0–2% fat)", "زبادي يوناني (0–2٪ دسم)"], yog: ["plain yogurt", "زبادي"], milk: ["low-fat milk", "حليب قليل الدسم"],
  labneh: ["labneh", "لبنة"], feta: ["feta", "جبنة فيتا"], halloumi: ["halloumi", "حلوم"], cottage: ["cottage cheese", "جبن كوتيج"],
  creamch: ["light cream cheese", "جبن كريمي خفيف"], cheddar: ["cheddar", "جبن شيدر"], mozz: ["mozzarella", "موزاريلا"],
  parm: ["parmesan", "بارميزان"], ricotta: ["ricotta", "ريكوتا"], akkawi: ["akkawi cheese", "جبنة عكاوي"], wcheese: ["white cheese", "جبن أبيض"],
  light_cheese: ["light cheese slice", "شريحة جبن خفيف"], butter: ["butter", "زبدة"], cream: ["cooking cream", "كريمة طبخ"],
  tzatziki: ["tzatziki", "تزاتزيكي"],
  rice: ["rice (uncooked)", "أرز (غير مطبوخ)"], brice: ["brown rice (uncooked)", "أرز بني (غير مطبوخ)"],
  basmati: ["basmati rice (uncooked)", "أرز بسمتي (غير مطبوخ)"], jasmine: ["jasmine rice (uncooked)", "أرز ياسمين (غير مطبوخ)"],
  arborio: ["arborio rice (uncooked)", "أرز أربوريو (غير مطبوخ)"], quinoa: ["quinoa (uncooked)", "كينوا (غير مطبوخة)"],
  bulgur: ["bulgur (uncooked)", "برغل (غير مطبوخ)"], freekeh: ["freekeh (uncooked)", "فريكة (غير مطبوخة)"],
  couscous: ["couscous (uncooked)", "كسكس (غير مطبوخ)"], oats: ["oats", "شوفان"], pasta_ww: ["whole-wheat pasta (uncooked)", "معكرونة قمح كامل (غير مطبوخة)"],
  orzo: ["orzo (uncooked)", "لسان عصفور (غير مطبوخ)"], vermicelli: ["vermicelli (uncooked)", "شعيرية (غير مطبوخة)"],
  noodles_rice: ["rice noodles (uncooked)", "نودلز الأرز (غير مطبوخة)"], noodles_wheat: ["wheat noodles (uncooked)", "نودلز القمح (غير مطبوخة)"],
  pita: ["whole-wheat pita", "رغيف خبز أسمر"], bread: ["slice of whole-grain bread", "شريحة خبز حبوب كاملة"],
  sourdough: ["slice of sourdough bread", "شريحة خبز مخمّر"], wrap: ["large whole-wheat wrap", "تورتيلا قمح كامل كبيرة"],
  tortilla_corn: ["corn tortilla", "تورتيلا ذرة"], tortilla_flour: ["flour tortilla", "تورتيلا قمح"], ricecake: ["rice cake", "كعكة أرز"],
  crackers: ["whole-grain cracker", "مقرمشة حبوب كاملة"], bun: ["whole-wheat burger bun", "خبز برغر قمح كامل"],
  manakish: ["za'atar manakish", "منقوشة زعتر"], taboon: ["taboon bread", "رغيف خبز طابون"],
  potato: ["potato", "بطاطا"], sweetpot: ["sweet potato", "بطاطا حلوة"], babypot: ["baby potatoes", "بطاطا صغيرة"],
  chickflour: ["chickpea flour", "دقيق الحمص"], popcorn: ["popcorn kernels", "حبوب ذرة الفشار"], corn: ["sweetcorn", "ذرة حلوة"],
  chickpeas: ["chickpeas (cooked or canned)", "حمص حب (مطبوخ أو معلب)"], fava: ["fava beans (cooked or canned)", "فول (مطبوخ أو معلب)"],
  lentil_red: ["red lentils (dry)", "عدس أحمر (جاف)"], lentil_brown: ["brown lentils (dry)", "عدس بني (جاف)"],
  lentil_green: ["green lentils (dry)", "عدس أخضر (جاف)"], lentil_cooked: ["cooked lentils", "عدس مطبوخ"],
  bblack: ["black beans (cooked or canned)", "فاصوليا سوداء (مطبوخة أو معلبة)"], bwhite: ["white beans (cooked or canned)", "فاصوليا بيضاء (مطبوخة أو معلبة)"],
  bkidney: ["kidney beans (cooked or canned)", "فاصوليا حمراء (مطبوخة أو معلبة)"], bpinto: ["pinto beans (cooked or canned)", "فاصوليا بينتو (مطبوخة أو معلبة)"],
  hummus: ["hummus", "حمص بالطحينة"], falafel: ["baked falafel", "حبة فلافل مخبوزة"], peas: ["peas", "بازلاء"],
  tomato: ["tomato", "طماطم"], cherry_tom: ["cherry tomatoes", "طماطم كرزية"], cucumber: ["cucumber", "خيار"], onion: ["onion", "بصل"],
  red_onion: ["red onion", "بصل أحمر"], garlic: ["garlic clove", "فص ثوم"], pepper: ["bell pepper", "فلفل رومي"],
  green_pepper: ["green pepper", "فلفل أخضر"], spinach: ["spinach", "سبانخ"], lettuce: ["lettuce", "خس"], mixed_greens: ["mixed salad leaves", "خضار ورقية مشكلة"],
  rocket: ["rocket", "جرجير"], cabbage: ["cabbage", "ملفوف"], broccoli: ["broccoli", "بروكلي"], cauliflower: ["cauliflower", "قرنبيط"],
  zucchini: ["zucchini", "كوسا"], eggplant: ["eggplant", "باذنجان"], carrot: ["carrot", "جزر"], celery: ["celery", "كرفس"],
  mushroom: ["mushrooms", "فطر"], green_beans: ["green beans", "فاصوليا خضراء"], asparagus: ["asparagus", "هليون"], bokchoy: ["bok choy", "ملفوف صيني"],
  kale: ["kale", "كيل"], okra: ["okra", "بامية"], leek: ["leek", "كراث"], radish: ["radish", "فجل"], roasted_pepper: ["roasted red pepper", "فلفل أحمر مشوي"],
  mixed_veg: ["mixed vegetables", "خضار مشكلة"], molokhia: ["molokhia leaves", "ملوخية"], vine_leaves: ["stuffed vine leaf", "إصبع ورق عنب محشي"],
  parsley: ["parsley", "بقدونس"], mint: ["mint", "نعناع"], coriander: ["coriander", "كزبرة"], basil: ["basil", "ريحان"], dill: ["dill", "شبت"],
  chives: ["chives", "ثوم معمّر"], spring_onion: ["spring onion", "بصل أخضر"], herbs: ["fresh herbs", "أعشاب طازجة"],
  olives: ["olives", "زيتون"], pickles: ["pickles", "مخلل"], avocado: ["avocado", "أفوكادو"], salsa: ["tomato salsa", "صلصة سالسا"],
  guacamole: ["guacamole", "جواكامولي"], tomato_sauce: ["tomato sauce", "صلصة طماطم"], tomato_paste: ["tomato paste", "معجون طماطم"],
  chili_sauce: ["red chili sauce", "صلصة الفلفل الأحمر"],
  banana: ["banana", "موزة"], apple: ["apple", "تفاحة"], berries: ["berries", "توت"], raspberries: ["raspberries", "توت العليق"], mango: ["mango", "مانجو"],
  orange: ["orange", "برتقالة"], dates: ["date", "تمرة"], raisins: ["raisins", "زبيب"], pomegranate: ["pomegranate seeds", "حب رمان"],
  figs: ["fresh fig", "حبة تين طازج"], kiwi: ["kiwi", "كيوي"], pineapple: ["pineapple", "أناناس"], watermelon: ["watermelon", "بطيخ"],
  grapes: ["grapes", "عنب"], strawberries: ["strawberries", "فراولة"], peach: ["peach", "خوخة"], lemon: ["lemon", "ليمونة"], lime: ["lime", "ليمونة خضراء"],
  oil: ["olive oil", "زيت زيتون"], tahini: ["tahini", "طحينة"], pb: ["peanut butter", "زبدة فول سوداني"], almonds: ["almonds", "لوز"],
  almond_butter: ["almond butter", "زبدة لوز"], walnuts: ["walnuts", "جوز"], pistachios: ["pistachios", "فستق حلبي"],
  pumpkin_seeds: ["pumpkin seeds", "بذور يقطين"], chia: ["chia seeds", "بذور شيا"], sesame: ["sesame seeds", "بذور سمسم"],
  coconut_milk_light: ["light coconut milk", "حليب جوز هند خفيف"], coconut_milk: ["full-fat coconut milk", "حليب جوز هند كامل الدسم"],
  rice_milk: ["rice milk", "حليب الأرز"], soy_milk: ["soy milk", "حليب صويا"], plant_milk: ["plant milk", "حليب نباتي"],
  mayo: ["light mayonnaise", "مايونيز خفيف"], mayo_full: ["mayonnaise", "مايونيز"], toum: ["toum (garlic sauce)", "ثومية"],
  babaganoush: ["baba ghanoush", "بابا غنوج"], muhammara: ["muhammara", "محمّرة"],
  soy: ["soy sauce", "صلصة صويا"], tamari: ["tamari (gluten-free soy sauce)", "صلصة تاماري (صويا بدون غلوتين)"], teriyaki: ["teriyaki sauce", "صلصة ترياكي"],
  miso: ["miso paste", "معجون ميسو"], fish_sauce: ["fish sauce", "صلصة السمك"], curry_paste: ["curry paste", "معجون كاري"],
  honey: ["honey", "عسل"], date_syrup: ["date syrup", "دبس التمر"], pom_molasses: ["pomegranate molasses", "دبس رمان"], mustard: ["mustard", "خردل"],
  vinegar: ["vinegar", "خل"], balsamic: ["balsamic vinegar", "خل بلسمي"], sugar: ["sugar", "سكر"], dark_choc: ["dark chocolate (70%+)", "شوكولاتة داكنة (70٪+)"],
  broth: ["low-salt broth", "مرق قليل الملح"], ginger: ["ginger", "زنجبيل"], lemongrass: ["lemongrass", "عشبة الليمون"],
  spices: ["spices", "بهارات"], cumin: ["cumin", "كمون"], sumac: ["sumac", "سماق"], zaatar: ["za'atar", "زعتر"], cinnamon: ["cinnamon", "قرفة"],
  paprika: ["paprika", "بابريكا"], chili: ["chili", "فلفل حار"], turmeric: ["turmeric", "كركم"], oregano: ["oregano", "أوريغانو"],
  kabsa_spice: ["kabsa spices", "بهارات الكبسة"], mandi_spice: ["mandi spices", "بهارات المندي"], maqluba_spice: ["maqluba spices", "بهارات المقلوبة"],
  ras: ["ras el hanout", "رأس الحانوت"], fajita_spice: ["fajita spices", "بهارات الفاهيتا"], curry_spice: ["curry spices", "بهارات الكاري"],
  saffron: ["saffron", "زعفران"], cardamom: ["cardamom", "هيل"], matcha: ["matcha", "ماتشا"], vanilla: ["vanilla", "فانيليا"], thyme: ["thyme", "زعتر بري"],
  bay: ["bay leaf", "ورق غار"], salt: ["salt", "ملح"],
};

// Unit labels [English, Arabic]. pc = pieces, t = to taste (not scaled).
const UNITS = { g: ["g", "غ"], ml: ["ml", "مل"], tbsp: ["tbsp", "ملعقة كبيرة"], tsp: ["tsp", "ملعقة صغيرة"] };

// "code amount; code amount; …" → [{ code, qty, unit }]
function parseIngredients(text) {
  return text.split(";").map((part) => {
    const [code, amount] = part.trim().split(/\s+/);
    if (amount === "t") return { code, qty: null, unit: "t" };
    const m = amount.match(/^(\d+(?:\.\d+)?)(g|ml|pc|tbsp|tsp)$/);
    return { code, qty: Number(m[1]), unit: m[2] };
  });
}

// Things that only come whole (you can't sensibly use 1½ eggs or 2½ tortillas)
const WHOLE_ITEMS = new Set(["egg", "eggw", "garlic", "falafel", "vine_leaves", "dates", "crackers", "ricecake",
  "tortilla_corn", "tortilla_flour", "bun", "sardine", "light_cheese"]);

// Kitchen-friendly rounding of a scaled amount
function roundAmount(qty, unit, code) {
  if (unit === "g" || unit === "ml") return qty >= 100 ? Math.round(qty / 10) * 10 : Math.max(5, Math.round(qty / 5) * 5);
  if (unit === "pc" && WHOLE_ITEMS.has(code)) return Math.max(1, Math.round(qty));
  const step = qty < 1 ? 0.25 : 0.5; // pieces and spoons: quarters below 1, halves above
  return Math.max(0.25, Math.round(qty / step) * step);
}

function prettyNumber(n) {
  const whole = Math.floor(n);
  const frac = { 0.25: "¼", 0.5: "½", 0.75: "¾" }[Math.round((n - whole) * 100) / 100] || "";
  return whole ? `${whole}${frac}` : frac || "0";
}

// The ingredient list for one recipe at a given portion size, in the visitor's language
function ingredientList(r, scale) {
  const ar = lang === "ar";
  const P = t("planner");
  const items = RECIPE_ING[r.id];
  if (!items) return `<p class="plan-ing">${r.i[ar ? 1 : 0]}</p>`;
  const rows = parseIngredients(items).map(({ code, qty, unit }) => {
    const name = (ING[code] || [code, code])[ar ? 1 : 0];
    if (unit === "t") return `<li><span class="ing-qty">${P.toTaste}</span> ${name}</li>`;
    const amount = roundAmount(qty * scale, unit, code);
    const label = unit === "pc" ? "×" : UNITS[unit][ar ? 1 : 0];
    const shown = unit === "g" || unit === "ml" ? fmt(amount) : prettyNumber(amount);
    return `<li><span class="ing-qty"><bdi dir="ltr">${shown}</bdi> ${label}</span> ${name}</li>`; // keep "1½" in order in Arabic
  });
  return `<p class="ing-title">${P.ingTitle(scale)}</p><ul class="ing-list">${rows.join("")}</ul>`;
}

// Amounts for one base serving of each recipe (portion ×1). Scaled to the visitor's portion when shown.
const RECIPE_ING = {
  // Breakfast
  b1: "egg 2pc; tomato 200g; pepper 80g; onion 50g; garlic 1pc; oil 0.5tbsp; cumin t; pita 1pc",
  b2: "fava 200g; oil 0.5tbsp; lemon 0.5pc; garlic 1pc; cucumber 80g; tomato 80g; cumin t; pita 0.5pc",
  b3: "oats 60g; milk 200ml; chia 1tbsp; berries 80g; cinnamon t",
  b4: "gyog 200g; walnuts 20g; honey 2tsp; berries 80g",
  b5: "egg 2pc; eggw 2pc; spinach 40g; pepper 50g; onion 30g; oil 1tsp; bread 1pc",
  b6: "labneh 80g; zaatar 1tsp; oil 1tsp; cucumber 80g; tomato 80g; olives 20g; pita 1pc",
  b7: "tofu 150g; spinach 50g; pepper 50g; turmeric t; oil 1tsp; tortilla_corn 1pc",
  b8: "bread 2pc; pb 1tbsp; banana 1pc; cinnamon t",
  b9: "chia 2tbsp; coconut_milk_light 200ml; mango 100g; lime 0.5pc",
  b10: "oats 40g; egg 2pc; banana 1pc; cinnamon t; gyog 50g",
  b11: "sourdough 2pc; avocado 0.5pc; egg 2pc; chili t",
  b12: "ricecake 3pc; creamch 40g; smsalmon 100g; cucumber 50g; dill t",
  b13: "quinoa 50g; apple 1pc; almond_butter 1tbsp; plant_milk 100ml; cinnamon t",
  b14: "cottage 200g; peach 1pc; pumpkin_seeds 1tbsp",
  b15: "sweetpot 150g; pepper 50g; onion 40g; egg 2pc; oil 2tsp; paprika t",
  b16: "egg 2pc; bblack 80g; brice 40g; salsa 2tbsp; lettuce 30g; oil 1tsp",
  b17: "rice 50g; rice_milk 200ml; apple 0.5pc; cinnamon t; pumpkin_seeds 1tbsp",
  b18: "manakish 1pc; labneh 40g; cucumber 60g; tomato 60g; mint t",
  b19: "egg 2pc; oil 1tbsp; sumac t; hummus 45g; cucumber 60g; tomato 60g; olives 20g",
  b20: "halloumi 80g; tomato 100g; cucumber 80g; olives 20g; mint t; orange 1pc",
  b21: "vermicelli 60g; saffron t; cardamom t; sugar 2tsp; butter 1tsp; egg 2pc",
  b22: "egg 3pc; spinach 40g; feta 30g; pepper 40g",
  b23: "bread 2pc; cottage 120g; tomato 80g; avocado 0.25pc; oregano t",
  b24: "pea_prot 30g; berries 150g; banana 1pc; pumpkin_seeds 1tbsp; chia 1tsp",
  b25: "rice 70g; ginger t; garlic 1pc; spinach 50g; egg 1pc; spring_onion t; broth 300ml",
  b26: "chia 3tbsp; soy_milk 200ml; matcha 1tsp; kiwi 1pc; date_syrup 1tsp",
  b27: "egg 2pc; bblack 80g; tortilla_corn 2pc; salsa 3tbsp; oil 1tsp; coriander t",
  b28: "tortilla_corn 3pc; bblack 100g; avocado 0.5pc; tomato 40g; red_onion 20g; lime 0.5pc",
  b29: "wrap 1pc; eggw 4pc; turkey_sl 80g; spinach 30g; oil 1tsp; mustard 1tsp",
  b30: "egg 3pc; mushroom 80g; cheddar 30g; butter 1tsp; chives t; cherry_tom 80g",
  b31: "egg 2pc; spinach 80g; zucchini 100g; leek 50g; garlic 1pc; cumin t; oil 2tsp",
  b32: "egg 3pc; soy 1tsp; rice 40g; pickles 40g",
  b33: "egg 3pc; butter 1tbsp; avocado 0.5pc; spinach 60g",
  b34: "labneh 80g; oil 1tbsp; mint t; egg 2pc; olives 30g; cucumber 80g",
  b35: "chia 2tbsp; coconut_milk 120ml; raspberries 30g; vanilla t",
  b36: "egg 2pc; smsalmon 80g; creamch 40g; cucumber 50g; dill t; butter 1tsp",
  b37: "sujuk 80g; egg 2pc; tomato 60g; parsley t; oil 1tsp",
  b38: "tofu 180g; spinach 60g; turmeric t; oil 2tsp; pumpkin_seeds 1tsp",
  b39: "chickpeas 150g; pita 0.5pc; yog 100g; tahini 1tbsp; cumin t; parsley t",
  b40: "chickpeas 150g; tahini 1tbsp; lemon 0.5pc; garlic 1pc; oil 1tsp; cucumber 80g; tomato 80g; mint t",
  b41: "egg 2pc; potato 150g; onion 40g; oil 1tbsp; cumin t; parsley t",
  b42: "akkawi 60g; olives 30g; cucumber 80g; tomato 80g; mint t; pita 1pc",
  b43: "egg 3pc; tomato 150g; green_pepper 60g; onion 30g; oil 2tsp",
  b44: "egg 2pc; eggw 2pc; spinach 40g; feta 30g; wrap 1pc",
  b45: "sourdough 2pc; tomato 1pc; garlic 1pc; oil 1tsp; egg 2pc",
  b46: "halloumi 70g; egg 2pc; oil 1tsp; cucumber 60g; olives 20g; mint t",
  b47: "egg 3pc; feta 30g; olives 20g; spinach 40g; oil 2tsp; oregano t",
  b48: "bread 2pc; avocado 0.5pc; zaatar 1tsp; oil 2tsp; tomato 60g; lemon 0.25pc",
  b49: "gyog 250g; berries 100g; pistachios 20g; honey 2tsp",
  b50: "egg 3pc; zucchini 80g; pepper 50g; onion 30g; parm 20g; oil 1tsp",
  b51: "bread 2pc; ricotta 80g; cherry_tom 80g; basil t; oil 1tsp",
  b52: "chickflour 60g; spinach 40g; tomato 60g; onion 30g; oil 2tsp; herbs t",

  // Lunch
  l1: "chick_b 130g; mixed_greens 60g; chickpeas 80g; cucumber 80g; tomato 80g; oil 1tbsp; lemon 0.5pc",
  l2: "lentil_red 90g; onion 50g; carrot 60g; cumin t; lemon 0.5pc; oil 1tsp; cucumber 80g; tomato 80g",
  l3: "chick_b 150g; rice 60g; lettuce 50g; tomato 50g; pickles 30g; tahini 1tbsp; spices t",
  l4: "tuna 120g; bwhite 120g; red_onion 30g; parsley t; lemon 0.5pc; oil 1tbsp",
  l5: "falafel 5pc; wrap 1pc; lettuce 30g; tomato 50g; pickles 20g; tahini 1tbsp",
  l6: "quinoa 50g; parsley 40g; mint t; tomato 100g; lemon 0.5pc; oil 2tsp; halloumi 60g",
  l7: "wrap 1pc; turkey_sl 100g; avocado 0.5pc; tomato 50g; lettuce 30g; mustard 1tsp",
  l8: "beef_lean 130g; broccoli 100g; pepper 80g; soy 1tbsp; ginger t; oil 1tsp; rice 60g",
  l9: "noodles_rice 60g; tofu 120g; carrot 50g; cabbage 60g; pb 1tbsp; soy 1tsp; lime 0.5pc",
  l10: "chick_b 140g; brice 50g; bblack 80g; corn 40g; salsa 2tbsp; lettuce 40g",
  l11: "lentil_brown 60g; rice 50g; onion 100g; oil 2tsp; cucumber 80g; tomato 80g",
  l12: "salmon 120g; rice 60g; edamame 50g; avocado 0.25pc; cucumber 50g; soy 1tbsp; sesame 1tsp",
  l13: "brice 60g; egg 2pc; peas 60g; carrot 40g; spring_onion t; soy 1tbsp; oil 1tsp",
  l14: "chickpeas 150g; feta 40g; cucumber 80g; tomato 80g; red_onion 20g; olives 20g; oregano t; oil 1tsp",
  l15: "chick_b 130g; potato 150g; carrot 60g; celery 40g; onion 40g; herbs t; broth 400ml",
  l16: "sweetpot 200g; bblack 120g; corn 50g; salsa 2tbsp; lime 0.5pc; coriander t; oil 1tsp",
  l17: "lentil_cooked 150g; rice 40g; cucumber 80g; parsley t; mint t; lemon 0.5pc; oil 1tbsp",
  l18: "chick_b 130g; rice 50g; zucchini 100g; pepper 80g; oil 1tsp; herbs t",
  l19: "egg 2pc; mayo 2tbsp; mustard 1tsp; bread 2pc; lettuce 30g; cucumber 50g",
  l20: "feta 40g; egg 2pc; babypot 150g; cucumber 80g; tomato 80g; olives 20g; oil 1tsp",
  l21: "chick_b 120g; lettuce 60g; tomato 80g; cucumber 80g; radish 30g; pita 0.5pc; sumac t; oil 1tbsp; lemon 0.5pc",
  l22: "vine_leaves 10pc; gyog 150g; cucumber 80g; mint t; oil 1tsp",
  l23: "beef_lean 140g; rice 60g; lettuce 50g; tomato 50g; pickles 30g; tahini 1tbsp; spices t",
  l24: "whitefish 160g; rice 70g; onion 80g; cumin t; oil 1tbsp; lemon 0.5pc",
  l25: "chick_b 150g; rice 50g; tomato 80g; cucumber 80g; tzatziki 3tbsp",
  l26: "bwhite 100g; pasta_ww 40g; carrot 50g; celery 40g; zucchini 80g; tomato 150g; basil t; oil 1tsp; broth 300ml",
  l27: "shrimp 150g; quinoa 50g; cucumber 80g; cherry_tom 80g; parsley t; lemon 0.5pc; oil 2tsp",
  l28: "chick_b 140g; teriyaki 2tbsp; rice 70g; broccoli 100g; sesame 1tsp",
  l29: "beef_lean 170g; lettuce 60g; cucumber 80g; mint t; chili t; lime 0.5pc; fish_sauce 1tsp; oil 1tbsp",
  l30: "noodles_wheat 80g; broth 400ml; soy 1tbsp; bokchoy 80g; carrot 50g; egg 1pc; oil 1tsp",
  l31: "curry_paste 1tbsp; coconut_milk_light 150ml; chickpeas 100g; pepper 60g; green_beans 60g; jasmine 50g",
  l32: "chick_b 130g; tomato 150g; broth 300ml; corn 50g; tortilla_corn 2pc; oil 1tsp; lime 0.5pc; chili t",
  l33: "whitefish 180g; tortilla_corn 3pc; cabbage 60g; lime 0.5pc; salsa 2tbsp; oil 2tsp",
  l34: "pepper 120g; onion 60g; bpinto 100g; brice 40g; guacamole 3tbsp; salsa 2tbsp; oil 1tsp",
  l35: "pasta_ww 70g; mozz 60g; cherry_tom 100g; basil t; oil 1tsp; balsamic 1tsp",
  l36: "chick_b 150g; lettuce 100g; parm 15g; bread 0.5pc; gyog 40g; oil 1tsp; lemon 0.25pc",
  l37: "potato 300g; tuna 120g; corn 60g; gyog 30g; mixed_greens 50g",
  l38: "chick_b 150g; halloumi 50g; mixed_greens 60g; cucumber 80g; olives 20g; oil 2tsp; lemon 0.5pc",
  l39: "tuna 170g; avocado 0.5pc; lettuce 60g; cucumber 80g; red_onion 20g; oil 1tbsp; lemon 0.5pc",
  l40: "beef_min 200g; cheddar 30g; lettuce 40g; pickles 30g; tomato 40g; mustard 1tsp; mixed_greens 60g; oil 1tsp",
  l41: "beef_min 160g; onion 30g; parsley t; tahini 2tbsp; cucumber 80g; tomato 80g",
  l42: "egg 3pc; mayo_full 1.5tbsp; mustard 1tsp; chives t; lettuce 50g; olives 20g",
  l43: "chick_b 150g; coconut_milk 120ml; ginger t; lemongrass t; lime 0.5pc; chili t; fish_sauce 1tsp",
  l44: "halloumi 80g; eggplant 100g; zucchini 100g; rocket 30g; pumpkin_seeds 1tbsp; oil 1tbsp",
  l45: "tofu 150g; avocado 0.5pc; cucumber 80g; cabbage 60g; ginger t; lime 0.5pc; oil 1tbsp",
  l46: "chick_b 150g; onion 100g; sumac t; oil 1tbsp; taboon 1pc",
  l47: "parsley 60g; bulgur 30g; tomato 100g; mint t; lemon 0.5pc; oil 1tbsp; chick_b 130g",
  l48: "freekeh 60g; chickpeas 80g; cucumber 80g; parsley t; pomegranate 30g; lemon 0.5pc; oil 2tsp",
  l49: "bwhite 150g; tomato_sauce 150g; garlic 1pc; coriander t; oil 1tsp; rice 60g",
  l50: "tomato 150g; cucumber 100g; red_onion 30g; olives 30g; feta 40g; oil 1tbsp; oregano t; chick_b 120g",
  l51: "tuna 120g; egg 1pc; babypot 120g; green_beans 80g; olives 20g; tomato 80g; oil 1tbsp; mustard 1tsp",
  l52: "lentil_green 50g; feta 40g; roasted_pepper 100g; rocket 30g; red_onion 20g; oil 2tsp; lemon 0.5pc",
  l53: "chick_b 120g; orzo 50g; broth 400ml; egg 1pc; lemon 0.5pc; dill t",
  l54: "chick_t 200g; lettuce 60g; cucumber 80g; pickles 30g; toum 2tbsp; oil 1tsp; spices t",
  l55: "salmon 140g; tomato 100g; cucumber 80g; olives 30g; feta 30g; oil 1tbsp",

  // Dinner
  d1: "salmon 140g; quinoa 40g; broccoli 150g; lemon 0.5pc; garlic 1pc; oil 1tsp",
  d2: "chick_t 180g; basmati 70g; tomato 100g; onion 60g; kabsa_spice t; raisins 15g; oil 1tsp",
  d3: "beef_min 140g; onion 30g; parsley t; bulgur 60g; cucumber 80g; tomato 80g; yog 80g; oil 1tsp",
  d4: "chick_b 160g; sweetpot 200g; green_beans 120g; oil 1tsp; paprika t",
  d5: "lentil_red 70g; spinach 60g; tomato 100g; curry_spice t; coconut_milk_light 80ml; basmati 50g",
  d6: "shrimp 170g; mixed_veg 200g; garlic 1pc; ginger t; soy 1tbsp; jasmine 60g; oil 1tsp",
  d7: "beef_min 130g; bkidney 100g; tomato 150g; onion 50g; chili t; rice 40g",
  d8: "pepper 2pc; rice 50g; bblack 80g; tomato 100g; cumin t; cheddar 30g",
  d9: "pasta_ww 80g; turkey_min 130g; tomato_sauce 150g; onion 40g; garlic 1pc; basil t; oil 1tsp",
  d10: "cod 200g; babypot 200g; zucchini 100g; cherry_tom 80g; lemon 0.5pc; oil 1tbsp",
  d11: "tofu 150g; teriyaki 2tbsp; brice 60g; bokchoy 100g; sesame 1tsp",
  d12: "eggplant 250g; lentil_green 50g; tomato_sauce 150g; onion 50g; cinnamon t; oil 1tbsp; yog 60g",
  d13: "chick_b 150g; pepper 100g; onion 60g; fajita_spice t; tortilla_flour 2pc; salsa 2tbsp",
  d14: "arborio 90g; mushroom 120g; spinach 60g; onion 40g; broth 400ml; parm 20g; oil 1tsp",
  d15: "lamb 130g; carrot 80g; zucchini 100g; chickpeas 60g; ras t; couscous 60g; oil 1tsp",
  d16: "chickpeas 150g; spinach 80g; tomato 150g; garlic 1pc; cumin t; basmati 50g; oil 1tsp",
  d17: "chick_t 170g; lemon 0.5pc; garlic 1pc; herbs t; basmati 70g; mixed_greens 60g; oil 1tbsp",
  d18: "quinoa 40g; lentil_green 40g; carrot 80g; zucchini 100g; red_onion 50g; oil 1tbsp; lemon 0.5pc",
  d19: "chickpeas 120g; coconut_milk_light 120ml; spinach 60g; sweetpot 100g; ginger t; turmeric t; jasmine 50g",
  d20: "potato 300g; bwhite 120g; kale 60g; garlic 1pc; oil 2tsp; lemon 0.5pc",
  d21: "shrimp 170g; garlic 2pc; oil 1tbsp; rice 60g; peas 60g; lemon 0.5pc",
  d22: "steak 150g; couscous 60g; cucumber 80g; tomato 80g; parsley t; oil 1tsp",
  d23: "salmon 130g; rice 60g; cucumber 80g; spinach 40g; lemon 0.5pc",
  d24: "egg 3pc; potato 150g; onion 50g; oil 1tbsp; mixed_greens 60g",
  d25: "chick_b 150g; hummus 60g; pita 1pc; cucumber 60g; tomato 60g; pickles 30g",
  d26: "tortilla_flour 2pc; bblack 100g; cheddar 40g; pepper 60g; salsa 2tbsp",
  d27: "rice 60g; bkidney 120g; avocado 0.5pc; corn 40g; lime 0.5pc; coriander t",
  d28: "chick_leg 250g; basmati 70g; mandi_spice t; onion 50g; tomato 60g; chili t",
  d29: "molokhia 150g; chick_b 150g; garlic 2pc; coriander t; broth 300ml; rice 60g; oil 1tsp; lemon 0.5pc",
  d30: "whitefish 180g; tahini 2tbsp; lemon 0.5pc; potato 200g; parsley t",
  d31: "zucchini 300g; rice 70g; tomato 200g; parsley t; mint t; oil 1tbsp",
  d32: "chick_b 200g; toum 1tbsp; zucchini 80g; pepper 80g; onion 40g; mixed_greens 60g; oil 1tsp",
  d33: "chick_t 200g; zucchini 150g; pepper 100g; red_onion 60g; oil 1tbsp; oregano t; lemon 0.5pc",
  d34: "lentil_brown 70g; tomato 100g; garlic 1pc; bay t; vinegar 1tsp; feta 30g; bread 1pc; oil 1tsp",
  d35: "zucchini 300g; turkey_min 170g; egg 0.5pc; tomato_sauce 150g; basil t; oil 1tsp",
  d36: "beef_lean 150g; broccoli 150g; garlic 1pc; ginger t; soy 1tbsp; rice 70g; oil 1tsp",
  d37: "chick_min 160g; basil t; chili t; garlic 2pc; soy 1tbsp; fish_sauce 1tsp; jasmine 70g; oil 1tsp",
  d38: "cauliflower 250g; egg 2pc; peas 50g; carrot 40g; spring_onion t; soy 1tbsp; oil 2tsp",
  d39: "salmon 140g; miso 1tbsp; rice 60g; bokchoy 100g; spring_onion t",
  d40: "turkey_min 180g; lettuce 80g; salsa 2tbsp; cheddar 30g; lime 0.5pc; oil 1tsp; spices t",
  d41: "shrimp 170g; tortilla_corn 4pc; mango 80g; red_onion 20g; cabbage 50g; lime 0.5pc; oil 1tsp",
  d42: "tortilla_corn 3pc; bblack 120g; pepper 60g; spinach 40g; chili_sauce 80g; cheddar 40g",
  d43: "turkey_min 150g; bun 1pc; lettuce 30g; tomato 40g; sweetpot 200g; oil 1tsp",
  d44: "chick_b 170g; potato 200g; milk 50ml; peas 80g; herbs t",
  d45: "lentil_green 70g; carrot 60g; onion 50g; peas 60g; tomato_paste 1tbsp; potato 200g; oil 1tsp",
  d46: "steak 200g; pepper 100g; zucchini 100g; mixed_greens 60g; oil 1tbsp",
  d47: "salmon 180g; butter 1tbsp; garlic 2pc; lemon 0.5pc; asparagus 150g",
  d48: "lamb_chop 200g; tzatziki 3tbsp; cucumber 80g; tomato 80g; olives 20g; feta 30g; oil 1tsp",
  d49: "chick_t 200g; mushroom 150g; cream 60ml; garlic 1pc; thyme t; broccoli 150g",
  d50: "shrimp 180g; zucchini 300g; garlic 2pc; ginger t; tamari 1tbsp; oil 1tbsp",
  d51: "beef_lean 200g; kabsa_spice t; onion 50g; cauliflower 250g; oil 1tbsp; parsley t",
  d52: "eggplant 250g; ricotta 80g; egg 1pc; mozz 50g; parm 15g; herbs t",
  d53: "tofu 150g; green_beans 120g; coconut_milk 100ml; curry_paste 1tbsp; spinach 50g",
  d54: "chick_b 170g; pepper 100g; onion 40g; fajita_spice t; guacamole 3tbsp; cheddar 30g; lettuce 60g",
  d55: "chick_t 150g; rice 70g; eggplant 150g; cauliflower 100g; oil 1tbsp; maqluba_spice t",
  d56: "freekeh 80g; chick_t 160g; broth 300ml; onion 50g; cinnamon t; oil 2tsp",
  d57: "beef_min 140g; onion 60g; tomato_sauce 200g; pom_molasses 1tsp; rice 60g; oil 1tsp",
  d58: "okra 200g; beef_lean 140g; tomato_sauce 150g; garlic 2pc; coriander t; rice 60g; oil 1tsp",
  d59: "eggplant 300g; onion 80g; tomato 150g; garlic 2pc; parsley t; oil 4tsp; bulgur 60g",
  d60: "shrimp 160g; tomato_sauce 150g; garlic 1pc; feta 40g; orzo 60g",
  d61: "chick_t 170g; chickpeas 120g; paprika t; tomato 150g; spinach 60g; garlic 1pc; oil 1tbsp",
  d62: "bream 160g; lemon 0.5pc; garlic 1pc; herbs t; oil 1tbsp; potato 200g",
  d63: "potato 150g; zucchini 150g; eggplant 100g; pepper 80g; tomato 100g; oil 1tbsp; feta 40g; bread 1pc",
  d64: "lamb_min 150g; zucchini 100g; pepper 80g; onion 40g; tahini 2tbsp",
  d65: "chick_b 180g; tzatziki 4tbsp; tomato 80g; cucumber 80g; olives 20g; feta 30g; oil 1tsp",
  d66: "hummus 100g; cauliflower 150g; pepper 100g; chickpeas 60g; oil 1tsp; pita 1pc",

  // Snacks
  s1: "apple 1pc; almonds 24g",
  s2: "hummus 60g; carrot 60g; cucumber 60g; pepper 60g",
  s3: "gyog 170g; berries 80g",
  s4: "egg 2pc; cucumber 100g; salt t",
  s5: "dates 3pc; walnuts 8g",
  s6: "banana 1pc; milk 250ml; whey 30g",
  s7: "edamame 150g; salt t",
  s8: "ricecake 2pc; pb 1tbsp; banana 0.5pc",
  s9: "cottage 150g; pineapple 80g",
  s10: "chickpeas 100g; paprika t; oil 0.5tsp",
  s11: "banana 1pc; pumpkin_seeds 2tbsp",
  s12: "watermelon 100g; orange 0.5pc; kiwi 1pc; grapes 40g; mint t",
  s13: "tuna 80g; mayo 1tbsp; cucumber 80g",
  s14: "dark_choc 20g; strawberries 100g",
  s15: "labneh 60g; oil 1tsp; cucumber 80g",
  s16: "babaganoush 4tbsp; carrot 60g; pepper 60g",
  s17: "pistachios 25g; orange 1pc",
  s18: "miso 1tbsp; tofu 60g; spring_onion t",
  s19: "avocado 0.5pc; lime 0.5pc; onion 15g; cucumber 60g; carrot 60g",
  s20: "corn 120g; lime 0.5pc; chili t; feta 20g",
  s21: "olives 30g; cherry_tom 100g; feta 30g",
  s22: "turkey_sl 80g; light_cheese 2pc; cucumber 60g",
  s23: "popcorn 30g; salt t",
  s24: "whey 30g",
  s25: "mango 150g; lime 0.5pc; chili t",
  s26: "crackers 4pc; hummus 45g",
  s27: "yog 200g; salt t; mint t",
  s28: "cheddar 40g; cucumber 80g",
  s29: "almonds 30g",
  s30: "avocado 0.5pc; salt t; lemon 0.25pc; chili t",
  s31: "olives 40g; pumpkin_seeds 2tbsp",
  s32: "celery 2pc; pb 2tbsp",
  s33: "figs 2pc; labneh 40g",
  s34: "dates 3pc; tahini 1tsp",
  s35: "muhammara 3tbsp; carrot 60g; cucumber 60g",
  s36: "tzatziki 4tbsp; cucumber 60g; pepper 50g; carrot 50g",
  s37: "mozz 50g; cherry_tom 80g; basil t; oil 0.5tsp",
  s38: "sardine 1pc; cucumber 80g; lemon 0.25pc",
  s39: "halloumi 50g; mint t; cucumber 60g",
  s40: "grapes 100g; wcheese 30g",
};

const SLOT_SETS = {
  1: ["omadMain", "omadSecond", "omadSide"], // one meal a day: a full spread eaten in one sitting
  2: ["breakfast", "dinner"],
  3: ["breakfast", "lunch", "dinner"],
  4: ["breakfast", "lunch", "snackPM", "dinner"],
  5: ["breakfast", "snackAM", "lunch", "snackPM", "dinner"],
  6: ["breakfast", "snackAM", "lunch", "snackPM", "dinner", "snackEve"],
};
const SLOT_TYPE = { breakfast: "b", lunch: "l", dinner: "d", snackAM: "s", snackPM: "s", snackEve: "s", omadMain: "d", omadSecond: "l", omadSide: "s" };
const TYPE_WEIGHT = { b: 0.25, l: 0.33, d: 0.33, s: 0.1 }; // share of daily calories

const QUESTIONS = [
  { id: "meals", multi: false, options: ["1", "2", "3", "4", "5", "6"] },
  { id: "diet", multi: false, options: ["any", "vegetarian", "vegan", "pescatarian"] },
  { id: "allergies", multi: true, none: true, options: ["gluten", "dairy", "egg", "nuts", "peanut", "soy", "fish", "shellfish", "sesame"] },
  { id: "dislikes", multi: true, none: true, options: ["meat", "poultry", "seafood", "egg", "mushroom", "spicy", "avocado", "legume"] },
  { id: "time", multi: false, options: ["15", "30", "any"] },
  { id: "cuisine", multi: true, options: ["me", "med", "asian", "west", "mex"] },
  { id: "budget", multi: false, options: ["budget", "flexible"] },
];
const DEFAULT_ANSWERS = {
  meals: "3", diet: "any", allergies: [], dislikes: [],
  time: "30", cuisine: [], budget: "flexible",
};

// Keto is chosen in step 1 (the calculator), so the meal plan follows it from there
const isKeto = () => Boolean(inputs && inputs.keto);
const visibleQuestions = () => QUESTIONS;

const WEEK_DAYS = 7;
const REPEAT_PENALTY = 6; // how strongly a recipe already used this week is pushed down
const SEARCH_SHORTLIST = 14; // candidates searched per meal per day
const plannerEl = document.getElementById("planner");
const planner = {
  view: "wizard", step: 0, answers: { ...DEFAULT_ANSWERS }, week: null, day: 0, planKey: null,
  get plan() {
    return this.week ? this.week[this.day] : null; // the day being shown
  },
};

try {
  const saved = JSON.parse(localStorage.getItem("nf-planner"));
  if (saved && saved.answers) {
    planner.answers = { ...DEFAULT_ANSWERS, ...saved.answers };
    delete planner.answers.dislikeText; // the free-text answer was removed; only listed choices count
    const valid = (day) => Array.isArray(day) && day.every((s) => !s.pick || RECIPE_BY_ID[s.pick]);
    if (Array.isArray(saved.week) && saved.week.length === WEEK_DAYS && saved.week.every(valid)) {
      planner.week = saved.week;
      planner.day = Math.min(Math.max(saved.day || 0, 0), WEEK_DAYS - 1);
      planner.planKey = saved.planKey || null; // plans saved without a key get rebuilt
      planner.view = "plan";
    }
  }
} catch {
  /* start with a fresh questionnaire */
}

function savePlanner() {
  try {
    localStorage.setItem("nf-planner", JSON.stringify({ answers: planner.answers, week: planner.week, day: planner.day, planKey: planner.planKey }));
  } catch {
    /* answers just won't be remembered */
  }
}

// Everything the person can't or won't eat, as recipe tags
function excludedTags(a) {
  const ex = new Set(a.allergies);
  if (a.diet === "vegetarian" || a.diet === "vegan") ["meat", "poultry", "fish", "shellfish"].forEach((x) => ex.add(x));
  if (a.diet === "vegan") ["egg", "dairy", "honey"].forEach((x) => ex.add(x));
  if (a.diet === "pescatarian") ["meat", "poultry"].forEach((x) => ex.add(x));
  a.dislikes.forEach((d) => (d === "seafood" ? ["fish", "shellfish"] : [d]).forEach((x) => ex.add(x)));
  return ex;
}

function recipeAllowed(r, ex) {
  return !r.g.some((tag) => ex.has(tag));
}

// The plan is rebuilt whenever the answers, or the goal or keto choice from step 1, change
function currentPlanKey() {
  return JSON.stringify(["week", planner.answers, inputs ? inputs.goal : null, isKeto()]);
}

const KETO_CARB_SHARE = 0.1; // keto: at most 10% of a meal's calories from carbs
const KETO_MAX_CARBS = 50; // grams a day
const carbShare = (r) => (r.c * 4) / r.k;

// Ranks meals that already passed every answer: variety, goal, cheaper and quicker first
function scoreRecipe(r, a, goal) {
  let s = Math.random() * 2; // variety between suggestions
  if (goal !== "maintain") s += ((r.p * 4) / r.k) * 8; // more protein for fat loss and muscle gain
  if (a.budget === "budget") s += r.$ === 1 ? 1.5 : 0;
  if (a.time === "15" && r.t <= 10) s += 0.5;
  return s;
}

// The meal plan aims for exactly what step 1 (the calculator) shows
function plannerTargets() {
  const { calories, protein, carbs, fat } = targetsFor(inputs, inputs.goal);
  return { calories, protein, carbs, fat };
}

const FIT_WEIGHT = { k: 4, p: 3, c: 1, f: 1 }; // calories matter most, then protein
// On keto every meal is already very low in carbs, so the daily carb number is a limit, not a target to hit
const fitWeight = (key) => (key === "c" && isKeto() ? 0.5 : FIT_WEIGHT[key]);
const SHARE_WEIGHT = 0.6; // keeps breakfast/lunch/dinner/snack sizes sensible
const ADDON_COST = 0.05; // prefer real meals; use top-ups only when they help
const PREF_WEIGHT = 0.006; // how much variety/goal ranking counts against the fit
const TOLERANCE = { k: 5, p: 10, c: 15, f: 15 }; // % allowed off target in the fit check

function goalsOf(target) {
  return { k: target.calories, p: target.protein, c: target.carbs, f: target.fat };
}

// Amount of each item (meal portion multiplier or top-up units) that best hits the targets.
// Projected gradient descent on a small least-squares problem.
function optimizeAmounts(items, target, iterations = 300) {
  const goal = goalsOf(target);
  const keys = ["k", "p", "c", "f"];
  let lipschitz = 0;
  let shareCurv = 0;
  for (const it of items) {
    for (const key of keys) lipschitz += 2 * fitWeight(key) * (it[key] / goal[key]) ** 2;
    if (it.share != null) shareCurv = Math.max(shareCurv, 2 * SHARE_WEIGHT * (it.k / goal.k) ** 2);
  }
  const step = 1 / (lipschitz + shareCurv);
  const clamp = (v, it) => Math.min(Math.max(v, it.lo), it.hi);
  const x = items.map((it) => (it.share != null ? clamp((it.share * goal.k) / it.k, it) : 0));

  for (let iter = 0; iter < iterations; iter++) {
    const tot = { k: 0, p: 0, c: 0, f: 0 };
    items.forEach((it, i) => keys.forEach((key) => (tot[key] += x[i] * it[key])));
    items.forEach((it, i) => {
      let grad = 0;
      for (const key of keys) grad += (2 * fitWeight(key) * (tot[key] - goal[key]) * it[key]) / goal[key] ** 2;
      if (it.share != null) grad += (2 * SHARE_WEIGHT * (x[i] * it.k - it.share * goal.k) * it.k) / goal.k ** 2;
      else grad += (ADDON_COST * it.k) / goal.k;
      x[i] = clamp(x[i] - step * grad, it);
    });
  }
  return x;
}

function dayObjective(items, x, target) {
  const goal = goalsOf(target);
  const tot = { k: 0, p: 0, c: 0, f: 0 };
  items.forEach((it, i) => ["k", "p", "c", "f"].forEach((key) => (tot[key] += x[i] * it[key])));
  let e = 0;
  for (const key of ["k", "p", "c", "f"]) e += fitWeight(key) * ((tot[key] - goal[key]) / goal[key]) ** 2;
  items.forEach((it, i) => {
    if (it.share != null) e += SHARE_WEIGHT * ((x[i] * it.k - it.share * goal.k) / goal.k) ** 2;
    else e += (ADDON_COST * x[i] * it.k) / goal.k;
  });
  return e;
}

// Everything the planner needs to know about the answers, computed once
function plannerContext() {
  const a = planner.answers;
  const ex = excludedTags(a);
  const ketoOk = (ad) => !isKeto() || carbShare(ad) <= 0.15; // no rice, bread or fruit top-ups on keto
  return { a, ex, addons: ADDONS.filter((ad) => recipeAllowed(ad, ex) && ketoOk(ad)) };
}

function mealItems(slots, picks) {
  const picked = slots.map((slot, i) => ({ slot, r: RECIPE_BY_ID[picks[i]] })).filter((m) => m.r);
  const weightSum = picked.reduce((sum, m) => sum + TYPE_WEIGHT[SLOT_TYPE[m.slot]], 0);
  return picked.map((m) => ({
    k: m.r.k, p: m.r.p, c: m.r.c, f: m.r.f,
    // one meal a day has to carry the whole day, so it may be served much larger
    lo: 0.5, hi: m.slot.startsWith("omad") ? 3 : SLOT_TYPE[m.slot] === "s" ? 2 : 2.5,
    share: TYPE_WEIGHT[SLOT_TYPE[m.slot]] / weightSum,
  }));
}

function addonItems(addons) {
  return addons.map((ad) => ({ k: ad.k, p: ad.p, c: ad.c, f: ad.f, lo: 0, hi: ad.max, share: null, ad }));
}

// Quick score of a whole day, used while searching for the best combination
function evaluateDay(slots, picks, target, ctx) {
  const items = [...mealItems(slots, picks), ...addonItems(ctx.addons)];
  if (!items.length) return Infinity;
  return dayObjective(items, optimizeAmounts(items, target, 150), target);
}

// Final amounts for display: portions rounded to 0.1, at most 4 top-ups rounded to 5 g
function solveDay(slots, picks, target, ctx) {
  const meals = mealItems(slots, picks);
  let addons = addonItems(ctx.addons);
  let x = optimizeAmounts([...meals, ...addons], target);
  const kinds = new Set();
  addons = addons
    .map((it, j) => ({ it, kcal: x[meals.length + j] * it.k }))
    .filter((a) => a.kcal >= 40)
    .sort((a, b) => b.kcal - a.kcal)
    .filter((a) => {
      // never suggest two of the same kind, e.g. two protein powders
      const kind = a.it.ad.kind || a.it.ad.id;
      if (kinds.has(kind)) return false;
      kinds.add(kind);
      return true;
    })
    .slice(0, 3)
    .map((a) => a.it);
  x = optimizeAmounts([...meals, ...addons], target);

  const scales = [];
  let m = 0;
  picks.forEach((id) => {
    if (!RECIPE_BY_ID[id]) return scales.push(null);
    const it = meals[m];
    scales.push(Math.min(Math.max(Math.round(x[m] * 10) / 10, it.lo), it.hi));
    m++;
  });
  const topUps = addons
    .map((it, j) => {
      const grams = Math.round((x[meals.length + j] * it.ad.u) / 5) * 5;
      const units = grams / it.ad.u;
      return { ad: it.ad, grams, k: it.k * units, p: it.p * units, c: it.c * units, f: it.f * units };
    })
    .filter((tu) => tu.k >= 30);
  return { scales, topUps };
}

// Best combination of recipes for one day, chosen from each meal's candidate list
function searchDay(info, slots, target, ctx) {
  const objective = (picks) =>
    evaluateDay(slots, picks, target, ctx) - PREF_WEIGHT * picks.reduce((sum, id, i) => sum + (info[i].scores[id] || 0), 0);
  const usable = (picks, i, id) => {
    const usedElsewhere = picks.some((p, j) => j !== i && p === id);
    const freeLeft = info[i].cands.some((c) => !picks.some((p, j) => j !== i && p === c));
    return !usedElsewhere || !freeLeft; // repeat a recipe in the same day only if nothing else is left
  };

  // Start from the best-liked recipes, then swap meals one at a time while the day fits better
  const picks = [];
  info.forEach((s, i) => {
    const ranked = [...s.cands].sort((x, y) => s.scores[y] - s.scores[x]);
    picks[i] = ranked.find((id) => !picks.includes(id)) || ranked[0] || null;
  });
  let best = objective(picks);
  for (let pass = 0; pass < 2; pass++) {
    let improved = false;
    info.forEach((s, i) => {
      for (const id of s.cands) {
        if (id === picks[i] || !usable(picks, i, id)) continue;
        const prev = picks[i];
        picks[i] = id;
        const val = objective(picks);
        if (val < best - 1e-9) {
          best = val;
          improved = true;
        } else picks[i] = prev;
      }
    });
    if (!improved) break;
  }
  return { picks, objective };
}

// A 7-day plan: every day fits the calculator's targets and every answer, and no recipe
// repeats during the week unless the answers leave too few recipes for a meal.
function buildPlan() {
  const ctx = plannerContext();
  const { a, ex } = ctx;
  const target = plannerTargets();
  const maxTime = a.time === "any" ? Infinity : Number(a.time);
  const slots = SLOT_SETS[a.meals];
  const goal = inputs ? inputs.goal : "maintain";

  // Candidates per meal. Diet, allergies and the avoid list are never broken. Then each other
  // answer narrows the list; one is only loosened for a meal when nothing at all fits it,
  // and the meal card says so.
  const base = slots.map((slot) => {
    let cands = RECIPES.filter((r) => r.s === SLOT_TYPE[slot] && recipeAllowed(r, ex));
    const relaxed = [];
    const narrow = (keep, answer) => {
      const left = cands.filter(keep);
      if (left.length) cands = left;
      else if (cands.length) relaxed.push(answer);
    };
    narrow((r) => r.t <= maxTime, "time");
    if (isKeto()) narrow((r) => carbShare(r) <= KETO_CARB_SHARE, "keto");
    if (a.cuisine.length) narrow((r) => a.cuisine.includes(r.cu), "cuisine");
    if (a.budget === "budget") {
      const cheapest = cands.filter((r) => r.$ === 1);
      if (cheapest.length >= 2) cands = cheapest;
      else narrow((r) => r.$ < 3, "budget");
    }
    return { slot, cands: cands.map((r) => r.id), relaxed };
  });

  const timesUsed = {};
  const week = [];
  const objectives = [];
  for (let d = 0; d < WEEK_DAYS; d++) {
    // Each day prefers recipes not used yet this week: every allowed recipe is a candidate,
    // but repeats rank lower, so variety wins unless the day can't hit its targets without
    // one. Only the best-ranked few are searched (speed).
    const info = base.map((s) => {
      const pool = s.cands; // unused recipes rank first; a repeat only wins when the day needs it
      const scores = Object.fromEntries(
        pool.map((id) => [id, scoreRecipe(RECIPE_BY_ID[id], a, goal) - REPEAT_PENALTY * (timesUsed[id] || 0)])
      );
      const shortlist = [...pool].sort((x, y) => scores[y] - scores[x]).slice(0, SEARCH_SHORTLIST);
      return { slot: s.slot, cands: shortlist, scores, relaxed: s.relaxed };
    });
    const { picks, objective } = searchDay(info, slots, target, ctx);
    week.push(
      info.map((s, i) => {
        const repeat = Boolean(picks[i] && timesUsed[picks[i]]);
        if (picks[i]) timesUsed[picks[i]] = (timesUsed[picks[i]] || 0) + 1;
        return { slot: s.slot, pick: picks[i], alts: [], relaxed: s.relaxed, repeat };
      })
    );
    objectives.push(objective);
  }

  // Alternatives: recipes not used anywhere this week, ranked by how well that day still fits,
  // so swapping one in keeps every day different
  week.forEach((day, d) => {
    const picks = day.map((s) => s.pick);
    day.forEach((s, i) => {
      s.alts = base[i].cands
        .filter((id) => !timesUsed[id])
        .sort(() => Math.random() - 0.5)
        .slice(0, SEARCH_SHORTLIST)
        .map((id) => {
          const trial = [...picks];
          trial[i] = id;
          return { id, val: objectives[d](trial) };
        })
        .sort((x, y) => x.val - y.val)
        .slice(0, 3)
        .map((x) => x.id);
    });
  });

  planner.week = week;
  planner.day = 0;
  planner.planKey = currentPlanKey();
  planner.view = "plan";
  savePlanner();
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
}

function renderPlanner() {
  if (!step1Done) {
    const S = t("step");
    plannerEl.innerHTML = `
      <div class="planner-locked">
        <div class="lock-ico" aria-hidden="true">🔒</div>
        <h3>${S.lockedTitle}</h3>
        <p>${S.lockedText}</p>
        <button type="button" class="btn" data-act="go-step1">${S.lockedBtn}</button>
      </div>`;
  } else if (planner.view === "plan" && planner.plan) {
    if (inputs && planner.planKey !== currentPlanKey()) buildPlan(); // answers or goal changed
    renderPlan();
  } else renderWizard();
}

function contextLine() {
  const P = t("planner");
  if (!inputs) return `<p class="planner-context">${P.needCalc}</p>`;
  const target = plannerTargets();
  const note = isKeto() ? P.ketoNote : "";
  return `<p class="planner-context">${P.context({ ...target, calories: fmt(target.calories) }, t("goal")[inputs.goal], note)}</p>`;
}

function renderWizard(focusVal) {
  const P = t("planner");
  const questions = visibleQuestions();
  planner.step = Math.min(planner.step, questions.length - 1);
  const q = questions[planner.step];
  const text = P.q[q.id];
  const a = planner.answers;
  const value = a[q.id];
  const isLast = planner.step === questions.length - 1;

  const chip = (val, label, pressed) =>
    `<button type="button" class="chip" data-val="${val}" aria-pressed="${pressed}">${label}</button>`;
  const chips = [
    q.none ? chip("none", text.none, value.length === 0) : "",
    ...q.options.map((o) => chip(o, text.opts[o], q.multi ? value.includes(o) : value === o)),
  ].join("");

  plannerEl.innerHTML = `
    ${contextLine()}
    <div class="wiz-layout">
      <div class="wiz-main">
        <div class="wiz-top">
          <span class="wiz-count">${P.count(planner.step + 1, questions.length)}</span>
          <div class="wiz-progress" aria-hidden="true"><span style="width:${((planner.step + 1) / questions.length) * 100}%"></span></div>
        </div>
        <h3 class="wiz-q" id="wiz-q">${text.q}</h3>
        <p class="wiz-hint">${text.hint}</p>
        <div class="chips" role="group" aria-labelledby="wiz-q">${chips}</div>
        <div class="wiz-nav">
          <button type="button" class="btn btn-outline" data-act="back" ${planner.step === 0 ? "disabled" : ""}>${P.back}</button>
          <button type="button" class="btn" data-act="${isLast ? "build" : "next"}">${isLast ? P.build : P.next}</button>
        </div>
      </div>
      <aside class="wiz-summary" id="wiz-summary">${wizardSummary()}</aside>
    </div>`;

  if (focusVal) plannerEl.querySelector(`.chip[data-val="${focusVal}"]`)?.focus();
}

// Side panel (laptop/PC layout): every answer so far, click to jump back to that question
function answerText(q) {
  const P = t("planner");
  const text = P.q[q.id];
  const value = planner.answers[q.id];
  if (!q.multi) return text.opts[value];
  const parts = value.map((v) => text.opts[v]);
  if (parts.length) return parts.join(P.sep);
  return q.none ? text.none : P.mix;
}

function wizardSummary() {
  const P = t("planner");
  const rows = visibleQuestions().map(
    (q, i) => `
      <li>
        <button type="button" data-step="${i}" ${i === planner.step ? 'aria-current="step"' : ""}>
          <span class="ws-q">${P.short[q.id]}</span>
          <span class="ws-a">${answerText(q)}</span>
        </button>
      </li>`
  ).join("");
  return `<p class="wiz-summary-title">${P.yourAnswers}</p><p class="wiz-summary-hint">${P.editHint}</p><ol>${rows}</ol>`;
}

// A YouTube search for the dish (in the visitor's language), so the link always shows current videos
function videoUrl(r) {
  const name = r.n[lang === "ar" ? 1 : 0].replace(/\s*\([^)]*\)/g, ""); // drop notes like "(keto)"
  const query = lang === "ar" ? `طريقة عمل ${name}` : `${name} recipe`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

// Portions, top-ups and the resulting totals for one day of the plan
function dayTotals(day, target, ctx) {
  const { scales, topUps } = solveDay(day.map((s) => s.slot), day.map((s) => s.pick), target, ctx);
  const totals = { k: 0, p: 0, c: 0, f: 0 };
  day.forEach((s, i) => {
    const r = RECIPE_BY_ID[s.pick];
    if (r) ["k", "p", "c", "f"].forEach((key) => (totals[key] += r[key] * scales[i]));
  });
  topUps.forEach((tu) => ["k", "p", "c", "f"].forEach((key) => (totals[key] += tu[key])));
  return { scales, topUps, totals };
}

// Whether a day's totals are within range of the calculator's targets
function checkFit(totals, goal) {
  const diffs = Object.fromEntries(["k", "p", "c", "f"].map((key) => [key, ((totals[key] - goal[key]) / goal[key]) * 100]));
  // Keto carbs pass when the day stays under 50 g (the usual keto limit)
  const fits = (key) => (key === "c" && isKeto() ? totals.c <= KETO_MAX_CARBS : Math.abs(diffs[key]) <= TOLERANCE[key]);
  return { diffs, fits, allFit: ["k", "p", "c", "f"].every(fits) };
}

function renderPlan() {
  const P = t("planner");
  const a = planner.answers;
  const ar = lang === "ar";
  const short = t("macroShort");

  if (!inputs) {
    plannerEl.innerHTML = contextLine();
    return;
  }
  const target = plannerTargets();
  const ctx = plannerContext();
  const goal = goalsOf(target);
  const { scales, topUps, totals } = dayTotals(planner.plan, target, ctx);
  const weekFit = planner.week.map((day) => checkFit(dayTotals(day, target, ctx).totals, goal).allFit);
  const macroChips = (m) => `
        <p class="meal-macros">
          <span class="protein">${short.p} ${Math.round(m.p)}${t("g")}</span>
          <span class="carbs">${short.c} ${Math.round(m.c)}${t("g")}</span>
          <span class="fat">${short.f} ${Math.round(m.f)}${t("g")}</span>
        </p>`;

  const cards = planner.plan
    .map((s, i) => {
      const r = RECIPE_BY_ID[s.pick];
      if (!r) {
        return `<article class="meal plan-meal"><p class="meal-time">${P.slot[s.slot]}</p><p class="plan-nomatch">${P.noMatch}</p></article>`;
      }
      const scale = scales[i];
      const m = { k: r.k * scale, p: r.p * scale, c: r.c * scale, f: r.f * scale };

      const alts = s.alts
        .map((id, j) => {
          const alt = RECIPE_BY_ID[id];
          return alt ? `<button type="button" class="alt-option" data-slot="${i}" data-alt="${j}">${alt.e} ${alt.n[ar ? 1 : 0]}</button>` : "";
        })
        .join("");

      // Which of the visitor's answers this meal satisfies, so the link is visible
      const M = P.match;
      const matches = [
        a.diet !== "any" ? P.q.diet.opts[a.diet] : "",
        a.allergies.length ? M.allergy : "",
        a.dislikes.length ? M.avoid : "",
        a.cuisine.includes(r.cu) ? P.q.cuisine.opts[r.cu] : "",
        a.time !== "any" && r.t <= Number(a.time) ? M.quick(a.time) : "",
        a.budget === "budget" && r.$ === 1 ? M.cheap : "",
        isKeto() && carbShare(r) <= KETO_CARB_SHARE ? M.keto : "",
      ].filter(Boolean);
      const relaxed = (s.relaxed || []).map((x) => M.names[x]);

      return `
      <article class="meal plan-meal" style="animation-delay:${i * 0.06}s">
        <p class="meal-time">${P.slot[s.slot]}${s.repeat ? ` <span class="repeat-badge" title="${P.repeatTitle}">🔁 ${P.repeatBadge}</span>` : ""}</p>
        <div class="plan-title"><span class="meal-emoji">${r.e}</span><h3>${r.n[ar ? 1 : 0]}</h3></div>
        ${ingredientList(r, scale)}
        <a class="video-link" href="${videoUrl(r)}" target="_blank" rel="noopener noreferrer">▶ ${P.video}</a>
        <p class="plan-meta">
          <span>🌍 ${P.q.cuisine.opts[r.cu]}</span>
          <span>⏱ ${P.minutes(r.t)}</span>
          <span title="${P.portionHint}">⚖️ ${P.portion(scale)}</span>
        </p>
        ${matches.length ? `<p class="plan-match"><span>${M.title}</span>${matches.map((x) => `<span class="match-chip">✓ ${x}</span>`).join("")}</p>` : ""}
        ${relaxed.length ? `<p class="plan-note">${M.relaxed(relaxed.join(P.sep))}</p>` : ""}
        <p class="meal-kcal">≈ ${fmt(Math.round(m.k / 10) * 10)} ${t("kcal")}</p>
        ${macroChips(m)}
        ${alts ? `<div class="plan-alts"><span>${P.others}</span>${alts}</div>` : ""}
      </article>`;
    })
    .join("");

  const topUpList = topUps
    .map(
      (tu) => `
        <li>
          <span class="topup-name">${tu.ad.e} <strong>${tu.grams} ${t("g")}</strong> ${tu.ad.n[ar ? 1 : 0]}</span>
          <span class="topup-kcal">≈ ${fmt(Math.round(tu.k))} ${t("kcal")} · ${short.p} ${Math.round(tu.p)}${t("g")}</span>
        </li>`
    )
    .join("");

  // What the plan avoids, in the visitor's language
  const qa = P.q;
  const avoid = [
    a.diet !== "any" ? qa.diet.opts[a.diet] : "",
    ...a.allergies.map((x) => qa.allergies.opts[x]),
    ...a.dislikes.map((x) => qa.dislikes.opts[x]),
  ].filter(Boolean);

  // Fit check against the daily targets
  const { diffs, fits, allFit } = checkFit(totals, goal);
  const repeats = planner.week.some((day) => day.some((s) => s.repeat));

  // Day tabs and a week overview for meal prep
  const dayTabs = planner.week
    .map(
      (_, d) => `<button type="button" class="day-tab" role="tab" data-day="${d}" aria-selected="${d === planner.day}">
        ${P.dayLabel(d + 1)} <span class="${weekFit[d] ? "fit-ok" : "fit-off"}">${weekFit[d] ? "✓" : "⚠"}</span></button>`
    )
    .join("");
  const overview = planner.week
    .map(
      (day, d) => `
        <li>
          <button type="button" data-day="${d}" ${d === planner.day ? 'aria-current="true"' : ""}>
            <span class="wk-day">${P.dayLabel(d + 1)} ${weekFit[d] ? "✓" : "⚠"}</span>
            <span class="wk-meals">${day
              .map((s) => RECIPE_BY_ID[s.pick])
              .filter(Boolean)
              .map((r) => `${r.e} ${r.n[ar ? 1 : 0]}`)
              .join(" · ")}</span>
          </button>
        </li>`
    )
    .join("");
  const bar = (key, label, unit) => {
    const ok = fits(key);
    const pct = Math.min((totals[key] / goal[key]) * 100, 100);
    const diff = Math.round(diffs[key]);
    return `
      <div class="total ${ok ? "ok" : "off"}">
        <div class="total-row">
          <span>${ok ? "✓" : "⚠"} ${label}</span>
          <span>${fmt(Math.round(totals[key]))} / ${fmt(goal[key])} ${unit} <small>(${diff > 0 ? "+" : ""}${diff}%)</small></span>
        </div>
        <div class="total-bar"><span style="width:${pct}%"></span></div>
      </div>`;
  };

  plannerEl.innerHTML = `
    ${contextLine()}
    <div class="plan-head">
      <div>
        <h3>${P.title}</h3>
        <p class="plan-summary">${P.summary(Number(a.meals), fmt(target.calories), t("goal")[inputs.goal])} · ${P.weekFit(weekFit.filter(Boolean).length)}</p>
        ${avoid.length ? `<p class="plan-avoid"><strong>${P.avoiding}</strong> ${avoid.map((x) => `<span class="tag">${x}</span>`).join(" ")}</p>` : ""}
      </div>
      <div class="plan-actions">
        <button type="button" class="btn btn-small" data-act="regen">🔄 ${P.regenerate}</button>
        <button type="button" class="btn btn-outline btn-small" data-act="edit">✏️ ${P.edit}</button>
      </div>
    </div>
    ${repeats ? `<p class="plan-note week-note">🔁 ${P.repeatNote}</p>` : ""}
    <div class="day-tabs" role="tablist" aria-label="${P.weekTitle}">${dayTabs}</div>
    <div class="plan-body">
      <div class="plan-grid">${cards}</div>
      <aside class="plan-side">
        ${topUpList ? `
        <div class="plan-topups">
          <p class="plan-totals-title">➕ ${P.addonsTitle}</p>
          <p class="plan-topups-hint">${P.addonsHint}</p>
          <ul>${topUpList}</ul>
        </div>` : ""}
        <div class="plan-totals">
          <p class="plan-totals-title">${P.totals}</p>
          <p class="plan-fit ${allFit ? "ok" : "off"}">${allFit ? P.fitGood : P.fitClose}</p>
          <div class="totals-grid">
            ${bar("k", P.kcalLabel, t("kcal"))}
            ${bar("p", P.protein, t("g"))}
            ${bar("c", P.carbs, t("g"))}
            ${bar("f", P.fat, t("g"))}
          </div>
        </div>
      </aside>
    </div>
    <div class="week-overview">
      <p class="plan-totals-title">🗓️ ${P.weekTitle}</p>
      <p class="plan-topups-hint">${P.weekHint}</p>
      <ol>${overview}</ol>
    </div>`;
}

plannerEl.addEventListener("click", (e) => {
  const chipEl = e.target.closest(".chip");
  const act = e.target.closest("[data-act]")?.dataset.act;
  const altEl = e.target.closest(".alt-option");
  const stepEl = e.target.closest("[data-step]");
  const a = planner.answers;

  const dayEl = e.target.closest("[data-day]");
  if (act === "go-step1") {
    blockStep2();
  } else if (dayEl) {
    planner.day = Number(dayEl.dataset.day);
    savePlanner();
    renderPlan();
    if (dayEl.closest(".week-overview")) plannerEl.querySelector(".day-tabs").scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (stepEl) {
    planner.step = Number(stepEl.dataset.step);
    renderWizard();
  } else if (chipEl) {
    const q = visibleQuestions()[planner.step];
    const val = chipEl.dataset.val;
    if (!q.multi) a[q.id] = val;
    else if (val === "none") a[q.id] = [];
    else a[q.id] = a[q.id].includes(val) ? a[q.id].filter((x) => x !== val) : [...a[q.id], val];
    savePlanner();
    renderWizard(val);
  } else if (act === "next") {
    planner.step = Math.min(planner.step + 1, visibleQuestions().length - 1);
    renderWizard();
  } else if (act === "back") {
    planner.step = Math.max(planner.step - 1, 0);
    renderWizard();
  } else if (act === "build" || act === "regen") {
    plannerEl.innerHTML = `<p class="planner-busy">⏳ ${t("planner").building}</p>`;
    setTimeout(() => {
      buildPlan();
      renderPlan();
      plannerEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 30); // let the message paint before the week is calculated
  } else if (act === "edit") {
    planner.view = "wizard";
    planner.step = 0;
    renderWizard();
  } else if (altEl) {
    const slot = planner.plan[Number(altEl.dataset.slot)];
    const j = Number(altEl.dataset.alt);
    [slot.pick, slot.alts[j]] = [slot.alts[j], slot.pick];
    savePlanner();
    renderPlan();
  }
});

// ---------- Two steps: the meal planner unlocks once step 1 (the calculator) is finished ----------
// Finished = the visitor entered age, height and weight and pressed Calculate.
const calcForm = document.getElementById("calc-form");
let step1Done = false;

function saveStep1() {
  try {
    localStorage.setItem("nf-calc", JSON.stringify(inputs));
  } catch {
    /* they'll just need to press Calculate again next visit */
  }
}

// Returning visitors who already finished step 1 keep their details and access to step 2
applyUnitsUI();
try {
  const saved = JSON.parse(localStorage.getItem("nf-calc"));
  if (saved && saved.age && saved.height && saved.weight) {
    el("age").value = saved.age;
    showMeasures(saved.height, saved.weight); // saved in kg/cm, shown in the visitor's units
    document.getElementById("activity").value = String(saved.activity);
    document.querySelector(`input[name="sex"][value="${saved.sex}"]`).checked = true;
    document.querySelector(`input[name="goal"][value="${saved.goal}"]`).checked = true;
    el(saved.keto ? "keto-yes" : "keto-no").checked = true;
    step1Done = true;
  }
} catch {
  /* start step 1 fresh */
}

function updateStepLocks() {
  const S = t("step");
  const next = document.getElementById("next-step");
  next.disabled = !step1Done;
  next.textContent = step1Done ? S.next : S.nextLocked;
  const hint = document.getElementById("step-hint");
  hint.textContent = S.calcHint;
  hint.hidden = step1Done;
  const navLink = document.getElementById("nav-step2");
  navLink.setAttribute("aria-disabled", !step1Done);
  navLink.title = step1Done ? "" : S.lockedTitle;
  const tab = document.getElementById("tab-step2");
  tab.setAttribute("aria-disabled", !step1Done);
  tab.querySelector(".tab-ico").textContent = step1Done ? "🍽️" : "🔒";
}

// Send the visitor back to step 1 and point at what's missing
function blockStep2() {
  if (isApp()) showScreen("calc");
  else document.getElementById("calculator").scrollIntoView({ behavior: "smooth", block: "start" });
  const hint = document.getElementById("step-hint");
  hint.classList.remove("nudge");
  void hint.offsetWidth; // restart the animation
  hint.classList.add("nudge");
  const empty = measureFields().find((f) => !f.value || !f.checkValidity());
  if (empty) setTimeout(() => empty.focus({ preventScroll: true }), 300);
}

function goToStep2() {
  if (!step1Done) return blockStep2();
  if (isApp()) showScreen("meals");
  else document.getElementById("meals").scrollIntoView({ behavior: "smooth", block: "start" });
}

calcForm.addEventListener("submit", (e) => {
  e.preventDefault(); // the browser has already checked the required fields and ranges
  calculate();
  if (!inputs) return;
  step1Done = true;
  saveStep1();
  updateStepLocks();
  renderPlanner();
  if (window.innerWidth < 900) {
    document.getElementById("results").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
calcForm.addEventListener("change", calculate);
calcForm.addEventListener("input", calculate);
document.getElementById("next-step").addEventListener("click", goToStep2);

// Every way into step 2 (header link, phone tab, in-page links) is blocked until step 1 is done
document.addEventListener(
  "click",
  (e) => {
    if (step1Done || !e.target.closest('a[href="#meals"], #tab-step2')) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    blockStep2();
  },
  true
);

// ---------- Feedback widget ----------
const FEEDBACK_ENDPOINT = "https://nutriashous.netlify.app/"; // Netlify Forms collects feedback (emailed to you)
const fbFab = document.getElementById("fb-fab");
const fbPanel = document.getElementById("fb-panel");
const fbForm = document.getElementById("fb-form");
const fbThanks = document.getElementById("fb-thanks");
const fbError = document.getElementById("fb-error");
const FAB_MARGIN = 12;

function placeFab(x, y) {
  const maxX = window.innerWidth - fbFab.offsetWidth - FAB_MARGIN;
  const tabbarHeight = document.documentElement.classList.contains("is-app")
    ? document.querySelector(".tabbar").offsetHeight
    : 0; // keep the button above the phone tab bar
  const maxY = window.innerHeight - fbFab.offsetHeight - FAB_MARGIN - tabbarHeight;
  fbFab.style.left = `${Math.min(Math.max(x, FAB_MARGIN), maxX)}px`;
  fbFab.style.top = `${Math.min(Math.max(y, FAB_MARGIN), maxY)}px`;
  fbFab.style.right = "auto";
  fbFab.style.bottom = "auto";
}

// Put the panel next to the button, wherever it has been dragged
function placePanel() {
  const fab = fbFab.getBoundingClientRect();
  const w = fbPanel.offsetWidth;
  const h = fbPanel.offsetHeight;
  const gap = 10;
  let top = fab.top - h - gap;
  if (top < FAB_MARGIN) top = Math.min(fab.bottom + gap, window.innerHeight - h - FAB_MARGIN);
  let left = fab.right - w;
  left = Math.min(Math.max(left, FAB_MARGIN), window.innerWidth - w - FAB_MARGIN);
  fbPanel.style.top = `${Math.max(top, FAB_MARGIN)}px`;
  fbPanel.style.left = `${left}px`;
}

function setPanel(open) {
  fbPanel.hidden = !open;
  fbFab.setAttribute("aria-expanded", open);
  fbFab.textContent = open ? "✕" : "💬";
  if (open) {
    placePanel();
    document.getElementById("fb-message").focus();
  }
}

// Restore the position the visitor dragged the button to last time
try {
  const saved = JSON.parse(localStorage.getItem("nf-fab-pos"));
  if (saved) placeFab(saved.x, saved.y);
} catch {
  /* keep the default bottom-right corner */
}

let drag = null;
let suppressClick = false;

fbFab.addEventListener("pointerdown", (e) => {
  const rect = fbFab.getBoundingClientRect();
  drag = { x: e.clientX, y: e.clientY, left: rect.left, top: rect.top, moved: false };
  fbFab.setPointerCapture(e.pointerId);
});

fbFab.addEventListener("pointermove", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x;
  const dy = e.clientY - drag.y;
  if (!drag.moved && Math.hypot(dx, dy) < 6) return;
  drag.moved = true;
  fbFab.classList.add("dragging");
  placeFab(drag.left + dx, drag.top + dy);
  if (!fbPanel.hidden) placePanel();
});

fbFab.addEventListener("pointerup", () => {
  if (!drag) return;
  suppressClick = drag.moved;
  if (drag.moved) {
    const rect = fbFab.getBoundingClientRect();
    try {
      localStorage.setItem("nf-fab-pos", JSON.stringify({ x: rect.left, y: rect.top }));
    } catch {
      /* position just won't be remembered */
    }
  }
  fbFab.classList.remove("dragging");
  drag = null;
});

fbFab.addEventListener("click", () => {
  if (suppressClick) {
    suppressClick = false;
    return;
  }
  setPanel(fbPanel.hidden);
});

document.getElementById("fb-close").addEventListener("click", () => setPanel(false));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !fbPanel.hidden) {
    setPanel(false);
    fbFab.focus();
  }
});
document.addEventListener("pointerdown", (e) => {
  if (!fbPanel.hidden && !fbPanel.contains(e.target) && !fbFab.contains(e.target)) setPanel(false);
});

window.addEventListener("resize", () => {
  if (fbFab.style.left) {
    const rect = fbFab.getBoundingClientRect();
    placeFab(rect.left, rect.top);
  }
  if (!fbPanel.hidden) placePanel();
});

// Submissions go to Netlify Forms (Netlify dashboard > Forms > feedback)
fbForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const submit = document.getElementById("fb-submit");
  submit.disabled = true;
  submit.textContent = t("sending");
  fbError.hidden = true;
  try {
    // On Netlify the form posts to this site; anywhere else (e.g. GitHub Pages) it goes to the
    // same Netlify form, whose replies the browser can't read, so only network errors count
    const onNetlify = location.hostname.endsWith("netlify.app");
    const res = await fetch(onNetlify ? "/" : FEEDBACK_ENDPOINT, {
      method: "POST",
      mode: onNetlify ? "same-origin" : "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(fbForm)).toString(),
    });
    if (onNetlify && !res.ok) throw new Error(res.status);
    fbForm.reset();
    fbForm.hidden = true;
    fbThanks.hidden = false;
    placePanel();
  } catch {
    fbError.textContent = t("fbError");
    fbError.hidden = false;
  } finally {
    submit.disabled = false;
    submit.textContent = t("send");
  }
});

document.getElementById("fb-again").addEventListener("click", () => {
  fbThanks.hidden = true;
  fbForm.hidden = false;
  placePanel();
  document.getElementById("fb-message").focus();
});

// ---------- Phone app layout: one screen per tab ----------
const appQuery = matchMedia("(max-width: 760px)");
const isApp = () => document.documentElement.classList.contains("is-app");
let currentScreen = "calc";

function showScreen(name, scrollTop = true) {
  currentScreen = name;
  document.querySelectorAll("[data-screen]").forEach((el) => el.classList.toggle("screen-active", el.dataset.screen === name));
  document.querySelectorAll(".tabbar [data-tab]").forEach((btn) => {
    if (btn.dataset.tab === name) btn.setAttribute("aria-current", "page");
    else btn.removeAttribute("aria-current");
  });
  if (scrollTop) window.scrollTo(0, 0);
}

function updateLayoutMode() {
  document.documentElement.classList.toggle("is-app", appQuery.matches);
  showScreen(currentScreen, false);
  if (fbFab.style.left) {
    const rect = fbFab.getBoundingClientRect();
    placeFab(rect.left, rect.top);
  }
}

document.querySelectorAll(".tabbar [data-tab]").forEach((btn) =>
  btn.addEventListener("click", () => showScreen(btn.dataset.tab))
);

// In the app layout, in-page links (#calculator, #meals…) switch to the right tab
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link || !isApp()) return;
  const target = document.querySelector(link.getAttribute("href"));
  const screen = target && target.closest("[data-screen]");
  if (!screen) return;
  e.preventDefault();
  showScreen(screen.dataset.screen);
  if (target !== screen) target.scrollIntoView({ block: "start" });
});

appQuery.addEventListener("change", updateLayoutMode);
try {
  const startScreen = location.hash ? document.querySelector(location.hash)?.closest("[data-screen]") : null;
  if (startScreen) currentScreen = startScreen.dataset.screen; // e.g. a shared link to #meals
} catch {
  /* not a valid section link; start on step 1 */
}
if (currentScreen === "meals" && !step1Done) currentScreen = "calc"; // step 2 is locked until step 1 is done
updateLayoutMode();

// ---------- Language switch (EN | AR) ----------
// [selector, attribute, dataset key holding the translation key, dataset key for the English]
const I18N_ATTRS = [
  ["[data-i18n-aria]", "aria-label", "i18nAria", "enAria"],
  ["[data-i18n-title]", "title", "i18nTitle", "enTitle"],
  ["[data-i18n-placeholder]", "placeholder", "i18nPlaceholder", "enPlaceholder"],
];

// Remember the original English so we can switch back
document.querySelectorAll("[data-i18n]").forEach((el) => (el.dataset.en = el.innerHTML));
I18N_ATTRS.forEach(([selector, attr, , enKey]) =>
  document.querySelectorAll(selector).forEach((el) => (el.dataset[enKey] = el.getAttribute(attr) || ""))
);

function applyLang(next) {
  lang = next;
  const ar = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = ar ? "rtl" : "ltr";
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = ar ? AR[el.dataset.i18n] ?? el.dataset.en : el.dataset.en;
  });
  I18N_ATTRS.forEach(([selector, attr, key, enKey]) =>
    document.querySelectorAll(selector).forEach((el) => {
      el.setAttribute(attr, ar ? AR[el.dataset[key]] ?? el.dataset[enKey] : el.dataset[enKey]);
    })
  );

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
  });

  // Re-render the parts the script builds
  applyUnitsUI();
  calculate();
  updateStepLocks();
  renderPlanner();
  document.getElementById("fb-submit").textContent = t("send");
}

// Arabic is the default; a language the visitor picks is kept until they close the tab
document.querySelectorAll(".lang-switch button").forEach((btn) =>
  btn.addEventListener("click", () => {
    applyLang(btn.dataset.lang);
    try {
      sessionStorage.setItem("nf-lang-visit", lang); // lasts for this visit only
    } catch {
      /* language just won't be remembered on reload */
    }
  })
);

// Every new visit opens in Arabic on PC and phone; English only sticks for the current visit
let startLang = "ar";
try {
  localStorage.removeItem("nf-lang-choice"); // an older version remembered English permanently
  startLang = sessionStorage.getItem("nf-lang-visit") || "ar";
} catch {
  /* keep Arabic */
}
applyLang(startLang);

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
