let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

const translations = {
  en: {
    home: "Home",
    features: "Features",
    about: "About",
    contact: "Contact",
    explore: "EXPLORE NOW",
    heroTitle: "YOUR SMART FARMING ASSISTANT",
    heroSubtitle: "Smart Crops, Smart Choices with AgriSens!",
    heroButton: "Smart Farming guide",
    featuresHeading: "Features",
    featuresDescription: "AgriSens provides farmers with essential tools for smarter farming. It offers personalized crop recommendations based on soil and climate, helps identify plant diseases through image analysis, and provides real-time weather forecasts. The app also includes features for crop planning and guidance, ensuring optimal farming decisions for better yields and healthier crops.",
    btnCropRec: "Crop Recommendations",
    btnDisease: "Identify Plant Diseases",
    btnWeather: "Today's Weather Forecast",
    btnFertilizer: "Fertilizer recommendation",
    btnGuide: "Smart Farming Guidance",
    featureWeatherTitle: "weather Forecast",
    featureWeatherDesc: "Plan Your Farming With Precision! Check Real-Time Weather Insights On Temperature, Humidity, And More. Integrated With Our Crop-Prediction Model For Optimal Decisions. Explore Historical Data, Get Alerts, And Access Educational Resources.",
    btnMoreInfoWeather: "more info",
    featurePlanningTitle: "Smart Crop Planning",
    featurePlanningDesc: "Harness the power of data analysis to predict crop suitability, providing insights into optimal cultivation conditions. AgriSens optimizes farming decisions based on comprehensive factors like soil quality, weather, and more.",
    btnMoreInfoPlanning: "more info",
    featureDiseaseTitle: "Plant Disease Identification",
    featureDiseaseDesc: "Assist farmers in detecting plant diseases by enabling image uploads, utilizing this analysis for prompt and precise identification, enhancing farming efficiency and crop management.",
    btnMoreInfoDisease: "more info",
    featureGuideTitle: "Smart Farming, Simple Guidance",
    featureGuideDesc: "Smart Crop Guide offers a simple, step-by-step plan for growing crops. It provides expert planting tips, tracks growth stages, and sends watering reminders. The app also gives pest control advice, harvest timing, weather updates, and fertilizer recommendations to ensure healthy crops.",
    btnMoreInfoGuide: "more info",
    featureInnovationsTitle: "Innovations for Modern Farms",
    featureInnovationsDesc: "Smart Crop Tech, Precision Farming, and Customizable Solutions for Sustainable and Efficient Agriculture!",
    btnMoreInfoInnovations: "more info",
    featureInterfaceTitle: "User-Friendly Interface",
    featureInterfaceDesc: "Our application features a user-friendly interface designed for farmers of all technological backgrounds. With simple inputs like location and crop selection, users can effortlessly access detailed information on crop suitability and recommended planting schedules.",
    btnMoreInfoInterface: "more info",
    marketHeading: "Real-Time Crop Market Prices",
    marketDescription: "Track crop price movement with a live market panel to help farmers decide the best time to sell.",
    marketCardTitle: "Market Price Watch",
    marketCardDesc: "Select a crop to see the latest market price and simulated price movement.",
    marketSelectLabel: "Choose a crop",
    priceLabel: "Current Price",
    changeLabel: "24h Change",
    marketPriceUpdate: "Updated just now",
    marketInfoTitle: "Why this is useful",
    marketInfoDesc: "Knowing market prices helps you choose the right crop, plan harvest timing, and maximize revenue. Prices refresh automatically to simulate live market movement.",
    marketBenefit1: "Compare crop values instantly",
    marketBenefit2: "See price direction with clear trend color",
    marketBenefit3: "Use market insight for smarter selling decisions",
    aboutHeading: "Team Members",
    aboutDescription: "Introduce the talented individuals shaping the AgriSens project.",
    footerQuickLinks: "quick links",
    footerExtraLinks: "extra links",
    footerHelpfulResources: "Helpful Resources",
    footerStayConnected: "Stay Connected",
  },
  hi: {
    home: "होम",
    features: "विशेषताएँ",
    about: "अबाउट",
    contact: "संपर्क",
    explore: "एक्सप्लोर करें",
    heroTitle: "आपका स्मार्ट फार्मिंग असिस्टेंट",
    heroSubtitle: "स्मार्ट फसलें, स्मार्ट विकल्प AgriSens के साथ!",
    heroButton: "स्मार्ट फार्मिंग गाइड",
    featuresHeading: "विशेषताएँ",
    featuresDescription: "AgriSens किसानों को स्मार्टर फार्मिंग के लिए आवश्यक उपकरण प्रदान करता है। यह मिट्टी और जलवायु के आधार पर व्यक्तिगत फसल सिफारिशें देता है, छवि विश्लेषण के माध्यम से पौधों की बीमारियों की पहचान करने में मदद करता है, और वास्तविक समय में मौसम पूर्वानुमान प्रदान करता है। ऐप में फसल नियोजन और मार्गदर्शन के लिए सुविधाएँ भी शामिल हैं, जो बेहतर उपज और स्वस्थ फसलों के लिए इष्टतम फार्मिंग निर्णय सुनिश्चित करते हैं।",
    btnCropRec: "फसल सिफारिशें",
    btnDisease: "प्लांट बीमारियाँ पहचानें",
    btnWeather: "आज का मौसम पूर्वानुमान",
    btnFertilizer: "उर्वरक सिफारिश",
    btnGuide: "स्मार्ट फार्मिंग मार्गदर्शन",
    featureWeatherTitle: "मौसम पूर्वानुमान",
    featureWeatherDesc: "सटीकता के साथ अपनी फार्मिंग की योजना बनाएं! तापमान, आर्द्रता और अधिक पर वास्तविक समय मौसम अंतर्दृष्टि जांचें। हमारे फसल-भविष्यवाणी मॉडल के साथ एकीकृत। इष्टतम निर्णयों के लिए। ऐतिहासिक डेटा का पता लगाएं, अलर्ट प्राप्त करें, और शैक्षिक संसाधनों तक पहुंचें।",
    btnMoreInfoWeather: "अधिक जानकारी",
    featurePlanningTitle: "स्मार्ट फसल नियोजन",
    featurePlanningDesc: "फसल उपयुक्तता की भविष्यवाणी करने के लिए डेटा विश्लेषण की शक्ति का उपयोग करें, इष्टतम खेती स्थितियों के बारे में अंतर्दृष्टि प्रदान करें। AgriSens मिट्टी गुणवत्ता, मौसम और अधिक जैसे व्यापक कारकों के आधार पर फार्मिंग निर्णयों को अनुकूलित करता है।",
    btnMoreInfoPlanning: "अधिक जानकारी",
    featureDiseaseTitle: "प्लांट बीमारी पहचान",
    featureDiseaseDesc: "छवि अपलोड सक्षम करके पौधों की बीमारियों का पता लगाने में किसानों की मदद करें, इस विश्लेषण का उपयोग त्वरित और सटीक पहचान के लिए करें, फार्मिंग दक्षता और फसल प्रबंधन को बढ़ाएं।",
    btnMoreInfoDisease: "अधिक जानकारी",
    featureGuideTitle: "स्मार्ट फार्मिंग, सरल मार्गदर्शन",
    featureGuideDesc: "स्मार्ट फसल गाइड फसलों को उगाने के लिए एक सरल, चरण-दर-चरण योजना प्रदान करता है। यह विशेषज्ञ रोपण युक्तियाँ प्रदान करता है, विकास चरणों को ट्रैक करता है, और पानी देने की याद दिलाता है। ऐप में कीट नियंत्रण सलाह, कटाई समय, मौसम अपडेट और उर्वरक सिफारिशें भी शामिल हैं ताकि स्वस्थ फसलें सुनिश्चित हों।",
    btnMoreInfoGuide: "अधिक जानकारी",
    featureInnovationsTitle: "आधुनिक खेतों के लिए नवाचार",
    featureInnovationsDesc: "स्मार्ट फसल टेक, प्रेसिजन फार्मिंग, और टिकाऊ और कुशल कृषि के लिए अनुकूलन योग्य समाधान!",
    btnMoreInfoInnovations: "अधिक जानकारी",
    featureInterfaceTitle: "उपयोगकर्ता-अनुकूल इंटरफेस",
    featureInterfaceDesc: "हमारा एप्लिकेशन सभी तकनीकी पृष्ठभूमि के किसानों के लिए डिज़ाइन किया गया उपयोगकर्ता-अनुकूल इंटरफेस प्रदान करता है। स्थान और फसल चयन जैसे सरल इनपुट के साथ, उपयोगकर्ता फसल उपयुक्तता और अनुशंसित रोपण कार्यक्रमों पर विस्तृत जानकारी आसानी से एक्सेस कर सकते हैं।",
    btnMoreInfoInterface: "अधिक जानकारी",
    marketHeading: "वास्तविक समय फसल बाजार मूल्य",
    marketDescription: "किसानों को बेचने का सबसे अच्छा समय तय करने में मदद करने के लिए एक लाइव मार्केट पैनल के साथ फसल मूल्य आंदोलन को ट्रैक करें।",
    marketCardTitle: "मार्केट मूल्य घड़ी",
    marketCardDesc: "नवीनतम बाजार मूल्य और अनुकरण मूल्य आंदोलन देखने के लिए एक फसल चुनें।",
    marketSelectLabel: "एक फसल चुनें",
    priceLabel: "वर्तमान मूल्य",
    changeLabel: "24 घंटे परिवर्तन",
    marketPriceUpdate: "अभी अपडेट किया गया",
    marketInfoTitle: "यह क्यों उपयोगी है",
    marketInfoDesc: "बाजार मूल्य जानना आपको सही फसल चुनने, कटाई समय की योजना बनाने और राजस्व अधिकतम करने में मदद करता है। मूल्य स्वचालित रूप से लाइव बाजार आंदोलन का अनुकरण करने के लिए ताज़ा होते हैं।",
    marketBenefit1: "फसल मूल्यों की तुलना तुरंत करें",
    marketBenefit2: "स्पष्ट प्रवृत्ति रंग के साथ मूल्य दिशा देखें",
    marketBenefit3: "स्मार्टर बिक्री निर्णयों के लिए बाजार अंतर्दृष्टि का उपयोग करें",
    aboutHeading: "टीम सदस्य",
    aboutDescription: "AgriSens परियोजना को आकार देने वाले प्रतिभाशाली व्यक्तियों का परिचय दें।",
    footerQuickLinks: "त्वरित लिंक",
    footerExtraLinks: "अतिरिक्त लिंक",
    footerHelpfulResources: "सहायक संसाधन",
    footerStayConnected: "जुड़े रहें",
  },
  kn: {
    home: "ಹೋಂ",
    features: "ವೈಶಿಷ್ಟ್ಯಗಳು",
    about: "ಬಗ್ಗೆ",
    contact: "ಸಂಪರ್ಕ",
    explore: "ಅನ್ವೇಷಿಸಿ",
    heroTitle: "ನಿಮ್ಮ ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮಿಂಗ್ ಅಸಿಸ್ಟೆಂಟ್",
    heroSubtitle: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆಗಳು, ಸ್ಮಾರ್ಟ್ ಆಯ್ಕೆಗಳು AgriSens ನೊಂದಿಗೆ!",
    heroButton: "ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮಿಂಗ್ ಗೈಡ್",
    featuresHeading: "ವೈಶಿಷ್ಟ್ಯಗಳು",
    featuresDescription: "AgriSens ರೈತರಿಗೆ ಸ್ಮಾರ್ಟರ್ ಫಾರ್ಮಿಂಗ್‌ಗಾಗಿ ಅಗತ್ಯ ಸಾಧನಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನದ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಬೆಳೆ ಸಲಹೆಗಳನ್ನು ನೀಡುತ್ತದೆ, ಚಿತ್ರ ವಿಶ್ಲೇಷಣೆಯ ಮೂಲಕ ಸಸ್ಯ ರೋಗಗಳನ್ನು ಗುರುತಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಮತ್ತು ನೈಜ ಸಮಯದಲ್ಲಿ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಅಪ್ಲಿಕೇಶನ್ ಬೆಳೆ ಯೋಜನೆ ಮತ್ತು ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಸಹ ಒಳಗೊಂಡಿದೆ, ಇದು ಉತ್ತಮ ಉತ್ಪಾದನೆ ಮತ್ತು ಆರೋಗ್ಯಕರ ಬೆಳೆಗಳಿಗಾಗಿ ಅತ್ಯುತ್ತಮ ಫಾರ್ಮಿಂಗ್ ನಿರ್ಧಾರಗಳನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.",
    btnCropRec: "ಬೆಳೆ ಸಲಹೆಗಳು",
    btnDisease: "ಸಸ್ಯ ರೋಗಗಳನ್ನು ಗುರುತಿಸಿ",
    btnWeather: "ಇಂದಿನ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ",
    btnFertilizer: "ಉರ್ವರಕ ಸಲಹೆ",
    btnGuide: "ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮಿಂಗ್ ಮಾರ್ಗದರ್ಶನ",
    featureWeatherTitle: "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ",
    featureWeatherDesc: "ನಿಖರತೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಫಾರ್ಮಿಂಗ್ ಅನ್ನು ಯೋಜಿಸಿ! ತಾಪಮಾನ, ಆರ್ದ್ರತೆ ಮತ್ತು ಹೆಚ್ಚಿನದರ ಮೇಲೆ ನೈಜ ಸಮಯ ಹವಾಮಾನ ಒಳನೋಟಗಳನ್ನು ಪರಿಶೀಲಿಸಿ. ನಮ್ಮ ಬೆಳೆ-ಮುನ್ಸೂಚನೆ ಮಾಡೆಲ್‌ನೊಂದಿಗೆ ಸಂಯೋಜಿತ. ಅತ್ಯುತ್ತಮ ನಿರ್ಧಾರಗಳಿಗಾಗಿ. ಐತಿಹಾಸಿಕ ಡೇಟಾವನ್ನು ಅನ್ವೇಷಿಸಿ, ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪಡೆಯಿರಿ, ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.",
    btnMoreInfoWeather: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    featurePlanningTitle: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಯೋಜನೆ",
    featurePlanningDesc: "ಬೆಳೆ ಸೂಕ್ತತೆಯನ್ನು ಮುನ್ಸೂಚಿಸಲು ಡೇಟಾ ವಿಶ್ಲೇಷಣೆಯ ಶಕ್ತಿಯನ್ನು ಬಳಸಿ, ಅತ್ಯುತ್ತಮ ಕೃಷಿ ಸ್ಥಿತಿಗಳ ಬಗ್ಗೆ ಒಳನೋಟಗಳನ್ನು ಒದಗಿಸಿ. AgriSens ಮಣ್ಣಿನ ಗುಣಮಟ್ಟ, ಹವಾಮಾನ ಮತ್ತು ಹೆಚ್ಚಿನಂತಹ ಸಮಗ್ರ ಅಂಶಗಳ ಆಧಾರದ ಮೇಲೆ ಫಾರ್ಮಿಂಗ್ ನಿರ್ಧಾರಗಳನ್ನು ಅನುಕೂಲಿಸುತ್ತದೆ.",
    btnMoreInfoPlanning: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    featureDiseaseTitle: "ಸಸ್ಯ ರೋಗ ಗುರುತಿಸುವಿಕೆ",
    featureDiseaseDesc: "ಚಿತ್ರ ಅಪ್‌ಲೋಡ್‌ಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವ ಮೂಲಕ ಸಸ್ಯ ರೋಗಗಳನ್ನು ಪತ್ತೆ ಮಾಡಲು ರೈತರಿಗೆ ಸಹಾಯ ಮಾಡಿ, ಈ ವಿಶ್ಲೇಷಣೆಯನ್ನು ತ್ವರಿತ ಮತ್ತು ನಿಖರ ಗುರುತಿಸುವಿಕೆಗಾಗಿ ಬಳಸಿ, ಫಾರ್ಮಿಂಗ್ ದಕ್ಷತೆ ಮತ್ತು ಬೆಳೆ ನಿರ್ವಹಣೆಯನ್ನು ಹೆಚ್ಚಿಸಿ.",
    btnMoreInfoDisease: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    featureGuideTitle: "ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮಿಂಗ್, ಸರಳ ಮಾರ್ಗದರ್ಶನ",
    featureGuideDesc: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಗೈಡ್ ಬೆಳೆಗಳನ್ನು ಬೆಳೆಸಲು ಸರಳ, ಹಂತ-ಹಂತದ ಯೋಜನೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ತಜ್ಞ ರೋಪಣ ಸಲಹೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ, ಬೆಳವಣಿಗೆ ಹಂತಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ, ಮತ್ತು ನೀರಾವರಿ ಜ್ಞಾಪನೆಗಳನ್ನು ಕಳುಹಿಸುತ್ತದೆ. ಅಪ್ಲಿಕೇಶನ್ ಕೀಟ ನಿಯಂತ್ರಣ ಸಲಹೆ, ಕೋಳಿ ಸಮಯ, ಹವಾಮಾನ ನವೀಕರಣಗಳು ಮತ್ತು ಉರ್ವರಕ ಸಲಹೆಗಳನ್ನು ಸಹ ಒಳಗೊಂಡಿದೆ ಆರೋಗ್ಯಕರ ಬೆಳೆಗಳನ್ನು ಖಚಿತಪಡಿಸಲು.",
    btnMoreInfoGuide: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    featureInnovationsTitle: "ಆಧುನಿಕ ಫಾರ್ಮ್‌ಗಳಿಗೆ ನವೀನತೆಗಳು",
    featureInnovationsDesc: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಟೆಕ್, ಪ್ರೆಸಿಜನ್ ಫಾರ್ಮಿಂಗ್, ಮತ್ತು ಟಿಕೌ ಮತ್ತು ದಕ್ಷ ಕೃಷಿಗಾಗಿ ಕಸ್ಟಮೈಸ್ ಮಾಡಬಹುದಾದ ಪರಿಹಾರಗಳು!",
    btnMoreInfoInnovations: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    featureInterfaceTitle: "ಬಳಕೆದಾರ-ಸ್ನೇಹಿ ಇಂಟರ್‌ಫೇಸ್",
    featureInterfaceDesc: "ನಮ್ಮ ಅಪ್ಲಿಕೇಶನ್ ಎಲ್ಲಾ ತಾಂತ್ರಿಕ ಹಿನ್ನೆಲೆಗಳ ರೈತರಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಬಳಕೆದಾರ-ಸ್ನೇಹಿ ಇಂಟರ್‌ಫೇಸ್ ಅನ್ನು ಒದಗಿಸುತ್ತದೆ. ಸ್ಥಳ ಮತ್ತು ಬೆಳೆ ಆಯ್ಕೆಯಂತಹ ಸರಳ ಇನ್‌ಪುಟ್‌ಗಳೊಂದಿಗೆ, ಬಳಕೆದಾರರು ಬೆಳೆ ಸೂಕ್ತತೆ ಮತ್ತು ಶಿಫಾರಸು ಮಾಡಲಾದ ರೋಪಣ ವೇಳಾಪಟ್ಟಿಗಳ ಬಗ್ಗೆ ವಿವರವಾದ ಮಾಹಿತಿಯನ್ನು ಸುಲಭವಾಗಿ ಪ್ರವೇಶಿಸಬಹುದು.",
    btnMoreInfoInterface: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    marketHeading: "ನೈಜ ಸಮಯ ಬೆಳೆ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
    marketDescription: "ರೈತರಿಗೆ ಮಾರಾಟ ಮಾಡುವ ಅತ್ಯುತ್ತಮ ಸಮಯವನ್ನು ನಿರ್ಧರಿಸಲು ಸಹಾಯ ಮಾಡಲು ಲೈವ್ ಮಾರುಕಟ್ಟೆ ಪ್ಯಾನಲ್‌ನೊಂದಿಗೆ ಬೆಳೆ ಬೆಲೆ ಚಲನೆಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
    marketCardTitle: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಗಡಿಯಾರ",
    marketCardDesc: "ಇತ್ತೀಚಿನ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಮತ್ತು ಅನುಕರಣೆ ಬೆಲೆ ಚಲನೆಯನ್ನು ನೋಡಲು ಬೆಳೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.",
    marketSelectLabel: "ಬೆಳೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ",
    priceLabel: "ಪ್ರಸ್ತುತ ಬೆಲೆ",
    changeLabel: "24 ಗಂಟೆ ಬದಲಾವಣೆ",
    marketPriceUpdate: "ಈಗಲೇ ನವೀಕರಿಸಲಾಗಿದೆ",
    marketInfoTitle: "ಇದು ಏಕೆ ಉಪಯುಕ್ತ",
    marketInfoDesc: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ತಿಳಿದುಕೊಳ್ಳುವುದು ನಿಮಗೆ ಸರಿಯಾದ ಬೆಳೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಲು, ಕೋಳಿ ಸಮಯವನ್ನು ಯೋಜಿಸಲು ಮತ್ತು ಆದಾಯವನ್ನು ಹೆಚ್ಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಬೆಲೆಗಳು ನೈಜ ಮಾರುಕಟ್ಟೆ ಚಲನೆಯನ್ನು ಅನುಕರಿಸಲು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ರಿಫ್ರೆಶ್ ಆಗುತ್ತವೆ.",
    marketBenefit1: "ಬೆಳೆ ಮೌಲ್ಯಗಳನ್ನು ತಕ್ಷಣವಾಗಿ ಹೋಲಿಸಿ",
    marketBenefit2: "ಸ್ಪಷ್ಟ ಟ್ರೆಂಡ್ ಬಣ್ಣದೊಂದಿಗೆ ಬೆಲೆ ದಿಕ್ಕನ್ನು ನೋಡಿ",
    marketBenefit3: "ಸ್ಮಾರ್ಟರ್ ಮಾರಾಟ ನಿರ್ಧಾರಗಳಿಗಾಗಿ ಮಾರುಕಟ್ಟೆ ಒಳನೋಟವನ್ನು ಬಳಸಿ",
    aboutHeading: "ತಂಡದ ಸದಸ್ಯರು",
    aboutDescription: "AgriSens ಪ್ರಾಜೆಕ್ಟ್ ಅನ್ನು ರೂಪಿಸುವ ಪ್ರತಿಭಾವಂತ ವ್ಯಕ್ತಿಗಳನ್ನು ಪರಿಚಯಿಸಿ.",
    footerQuickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    footerExtraLinks: "ಹೆಚ್ಚುವರಿ ಲಿಂಕ್‌ಗಳು",
    footerHelpfulResources: "ಸಹಾಯಕ ಸಂಪನ್ಮೂಲಗಳು",
    footerStayConnected: "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
  },
  te: {
    home: "హోమ్",
    features: "ఫీచర్లు",
    about: "గురించి",
    contact: "సంప్రదించండి",
    explore: "అన్వేషించండి",
    heroTitle: "మీ స్మార్ట్ ఫార్మింగ్ అసిస్టెంట్",
    heroSubtitle: "స్మార్ట్ పంటలు, స్మార్ట్ ఎంపికలు AgriSensతో!",
    heroButton: "స్మార్ట్ ఫార్మింగ్ గైడ్",
    featuresHeading: "ఫీచర్లు",
    featuresDescription: "AgriSens రైతులకు స్మార్టర్ ఫార్మింగ్ కోసం అవసరమైన సాధనాలను అందిస్తుంది. ఇది మట్టి మరియు వాతావరణం ఆధారంగా వ్యక్తిగత పంట సిఫార్సులను అందిస్తుంది, చిత్ర విశ్లేషణ ద్వారా మొక్కల వ్యాధులను గుర్తించడంలో సహాయపడుతుంది, మరియు నిజ సమయంలో వాతావరణ సూచనలను అందిస్తుంది. యాప్ పంట ప్లానింగ్ మరియు మార్గదర్శకత్వం కోసం ఫీచర్లను కూడా కలిగి ఉంది, ఇది మెరుగైన దిగుబడి మరియు ఆరోగ్యకరమైన పంటల కోసం అత్యుత్తమ ఫార్మింగ్ నిర్ణయాలను నిర్ధారిస్తుంది.",
    btnCropRec: "పంట సిఫార్సులు",
    btnDisease: "మొక్కల వ్యాధులను గుర్తించండి",
    btnWeather: "నేటి వాతావరణ సూచన",
    btnFertilizer: "ఎరువు సిఫార్సు",
    btnGuide: "స్మార్ట్ ఫార్మింగ్ మార్గదర్శకత్వం",
    featureWeatherTitle: "వాతావరణ సూచన",
    featureWeatherDesc: "ఖచ్చితత్వంతో మీ ఫార్మింగ్‌ను ప్లాన్ చేయండి! ఉష్ణోగ్రత, తేమ మరియు మరిన్నింటిపై నిజ సమయ వాతావరణ అంతర్దృష్టులను తనిఖీ చేయండి. మా పంట-సూచన మోడల్‌తో సమగ్రం. అత్యుత్తమ నిర్ణయాల కోసం. చారిత్రక డేటాను అన్వేషించండి, హెచ్చరికలను పొందండి, మరియు విద్యా వనరులను యాక్సెస్ చేయండి.",
    btnMoreInfoWeather: "మరింత సమాచారం",
    featurePlanningTitle: "స్మార్ట్ పంట ప్లానింగ్",
    featurePlanningDesc: "పంట అనుకూలతను అంచనా వేయడానికి డేటా విశ్లేషణ శక్తిని ఉపయోగించండి, అత్యుత్తమ వ్యవసాయ పరిస్థితుల గురించి అంతర్దృష్టులను అందించండి. AgriSens మట్టి నాణ్యత, వాతావరణం మరియు మరిన్నింటివంటి సమగ్ర కారకాల ఆధారంగా ఫార్మింగ్ నిర్ణయాలను ఆప్టిమైజ్ చేస్తుంది.",
    btnMoreInfoPlanning: "మరింత సమాచారం",
    featureDiseaseTitle: "మొక్క వ్యాధి గుర్తింపు",
    featureDiseaseDesc: "చిత్ర అప్‌లోడ్‌లను ప్రారంభించడం ద్వారా మొక్కల వ్యాధులను గుర్తించడంలో రైతులకు సహాయపడండి, ఈ విశ్లేషణను వేగంగా మరియు ఖచ్చితంగా గుర్తించడానికి ఉపయోగించండి, ఫార్మింగ్ సామర్థ్యం మరియు పంట నిర్వహణను మెరుగుపరచండి.",
    btnMoreInfoDisease: "మరింత సమాచారం",
    featureGuideTitle: "స్మార్ట్ ఫార్మింగ్, సరళ మార్గదర్శకత్వం",
    featureGuideDesc: "స్మార్ట్ పంట గైడ్ పంటలను పెంచడానికి సరళమైన, దశలవారీ ప్లాన్‌ను అందిస్తుంది. ఇది నిపుణుల పంటింగ్ చిట్కాలను అందిస్తుంది, వృద్ధి దశలను ట్రాక్ చేస్తుంది, మరియు నీటిపారుదల జ్ఞాపికలను పంపుతుంది. యాప్ కీట నియంత్రణ సలహా, కోత సమయం, వాతావరణ అప్‌డేట్‌లు మరియు ఎరువు సిఫార్సులను కూడా కలిగి ఉంది ఆరోగ్యకరమైన పంటలను నిర్ధారించడానికి.",
    btnMoreInfoGuide: "మరింత సమాచారం",
    featureInnovationsTitle: "ఆధునిక పంటల కోసం నవీకరణలు",
    featureInnovationsDesc: "స్మార్ట్ పంట టెక్, ప్రెసిజన్ ఫార్మింగ్, మరియు సస్టైనబుల్ మరియు ఎఫిషియంట్ అగ్రికల్చర్ కోసం కస్టమైజ్ చేయగల పరిష్కారాలు!",
    btnMoreInfoInnovations: "మరింత సమాచారం",
    featureInterfaceTitle: "వినియోగదారు-స్నేహపూర్వక ఇంటర్ఫేస్",
    featureInterfaceDesc: "మా అప్లికేషన్ అన్ని టెక్నికల్ బ్యాక్‌గ్రౌండ్‌ల రైతుల కోసం డిజైన్ చేయబడిన వినియోగదారు-స్నేహపూర్వక ఇంటర్ఫేస్‌ను అందిస్తుంది. స్థానం మరియు పంట ఎంపిక వంటి సరళ ఇన్‌పుట్‌లతో, వినియోగదారులు పంట అనుకూలత మరియు సిఫార్సు చేయబడిన పంటింగ్ షెడ్యూల్‌లపై వివరమైన సమాచారాన్ని సులభంగా యాక్సెస్ చేయవచ్చు.",
    btnMoreInfoInterface: "మరింత సమాచారం",
    marketHeading: "నిజ సమయ పంట మార్కెట్ ధరలు",
    marketDescription: "రైతులకు అమ్మే అత్యుత్తమ సమయాన్ని నిర్ణయించడంలో సహాయపడే లైవ్ మార్కెట్ ప్యానెల్‌తో పంట ధర చలనాన్ని ట్రాక్ చేయండి.",
    marketCardTitle: "మార్కెట్ ధర వాచ్",
    marketCardDesc: "తాజా మార్కెట్ ధర మరియు అనుకరించిన ధర చలనాన్ని చూడటానికి పంటను ఎంచుకోండి.",
    marketSelectLabel: "పంటను ఎంచుకోండి",
    priceLabel: "ప్రస్తుత ధర",
    changeLabel: "24 గంటల మార్పు",
    marketPriceUpdate: "ఇప్పుడే అప్‌డేట్ చేయబడింది",
    marketInfoTitle: "ఇది ఎందుకు ఉపయోగపడుతుంది",
    marketInfoDesc: "మార్కెట్ ధరలను తెలుసుకోవడం మీకు సరైన పంటను ఎంచుకోవడంలో, కోత సమయాన్ని ప్లాన్ చేయడంలో మరియు ఆదాయాన్ని పెంచడంలో సహాయపడుతుంది. ధరలు నిజ మార్కెట్ చలనాన్ని అనుకరించడానికి స్వయంచాలకంగా రిఫ్రెష్ అవుతాయి.",
    marketBenefit1: "పంట విలువలను తక్షణమే సరిపోల్చండి",
    marketBenefit2: "స్పష్ట ట్రెండ్ రంగుతో ధర దిశను చూడండి",
    marketBenefit3: "స్మార్టర్ అమ్మకం నిర్ణయాల కోసం మార్కెట్ అంతర్దృష్టిని ఉపయోగించండి",
    aboutHeading: "టీమ్ మెంబర్లు",
    aboutDescription: "AgriSens ప్రాజెక్ట్‌ను రూపొందించే ప్రతిభావంతులైన వ్యక్తులను పరిచయం చేయండి.",
    footerQuickLinks: "త్వరిత లింకులు",
    footerExtraLinks: "అదనపు లింకులు",
    footerHelpfulResources: "సహాయక వనరులు",
    footerStayConnected: "కనెక్ట్ అయ్యి ఉండండి",
  },
  ta: {
    home: "முகப்பு",
    features: "அம்சங்கள்",
    about: "பற்றி",
    contact: "தொடர்பு",
    explore: "ஆராயுங்கள்",
    heroTitle: "உங்கள் ஸ்மார்ட் ஃபார்மிங் அசிஸ்டென்ட்",
    heroSubtitle: "ஸ்மார்ட் பயிர்கள், ஸ்மார்ட் தேர்வுகள் AgriSens உடன்!",
    heroButton: "ஸ்மார்ட் ஃபார்மிங் கைட்",
    featuresHeading: "அம்சங்கள்",
    featuresDescription: "AgriSens விவசாயிகளுக்கு ஸ்மார்ட்டர் ஃபார்மிங் செய்ய அவசியமான கருவிகளை வழங்குகிறது. இது மண் மற்றும் காலநிலை அடிப்படையில் தனிப்பட்ட பயிர் பரிந்துரைகளை வழங்குகிறது, பட பகுப்பாய்வு மூலம் தாவர நோய்களை அடையாளம் காண உதவுகிறது, மற்றும் நேரடியாக வானிலை முன்னறிவிப்புகளை வழங்குகிறது. ஆப் பயிர் திட்டமிடல் மற்றும் வழிகாட்டலுக்கான அம்சங்களையும் கொண்டுள்ளது, இது சிறந்த விளைச்சல் மற்றும் ஆரோக்கியமான பயிர்களுக்கு உகந்த ஃபார்மிங் முடிவுகளை உறுதிப்படுத்துகிறது.",
    btnCropRec: "பயிர் பரிந்துரைகள்",
    btnDisease: "தாவர நோய்களை அடையாளம் காண்க",
    btnWeather: "இன்றைய வானிலை முன்னறிவிப்பு",
    btnFertilizer: "உரப் பரிந்துரை",
    btnGuide: "ஸ்மார்ட் ஃபார்மிங் வழிகாட்டல்",
    featureWeatherTitle: "வானிலை முன்னறிவிப்பு",
    featureWeatherDesc: "துல்லியத்துடன் உங்கள் ஃபார்மிங் செயலைத் திட்டமிடுங்கள்! வெப்பநிலை, ஈரப்பதம் மற்றும் மேலும் பலவற்றில் நேரடி வானிலை நுண்ணறிவுகளைச் சரிபார்க்கவும். எங்கள் பயிர்-முன்னறிவிப்பு மாடலுடன் ஒருங்கிணைக்கப்பட்டது. உகந்த முடிவுகளுக்கு. வரலாற்று தரவை ஆராயுங்கள், எச்சரிக்கைகளைப் பெறுங்கள், மற்றும் கல்வி வளங்களை அணுகுங்கள்.",
    btnMoreInfoWeather: "மேலும் தகவல்",
    featurePlanningTitle: "ஸ்மார்ட் பயிர் திட்டமிடல்",
    featurePlanningDesc: "பயிர் பொருத்தத்தை முன்னறிவிப்பதற்கு தரவு பகுப்பாய்வின் சக்தியைப் பயன்படுத்துங்கள், உகந்த விவசாய நிலைகளைப் பற்றிய நுண்ணறிவுகளை வழங்குங்கள். AgriSens மண் தரம், வானிலை மற்றும் மேலும் பலவற்றைப் போன்ற விரிவான காரணிகளின் அடிப்படையில் ஃபார்மிங் முடிவுகளை மேம்படுத்துகிறது.",
    btnMoreInfoPlanning: "மேலும் தகவல்",
    featureDiseaseTitle: "தாவர நோய் அடையாளம்",
    featureDiseaseDesc: "பட பதிவேற்றங்களை இயக்குவதன் மூலம் தாவர நோய்களை அடையாளம் காண விவசாயிகளுக்கு உதவுங்கள், இந்த பகுப்பாய்வை விரைவான மற்றும் துல்லியமான அடையாளத்திற்குப் பயன்படுத்துங்கள், ஃபார்மிங் செயல்திறன் மற்றும் பயிர் மேலாண்மையை மேம்படுத்துங்கள்.",
    btnMoreInfoDisease: "மேலும் தகவல்",
    featureGuideTitle: "ஸ்மார்ட் ஃபார்மிங், எளிய வழிகாட்டல்",
    featureGuideDesc: "ஸ்மார்ட் பயிர் கைட் பயிர்களை வளர்ப்பதற்கு எளிய, படிப்படியான திட்டத்தை வழங்குகிறது. இது நிபுணர் நடவு உதவிக்குறிப்புகளை வழங்குகிறது, வளர்ச்சி கட்டங்களை கண்காணிக்கிறது, மற்றும் நீர்ப்பாசன நினைவூட்டல்களை அனுப்புகிறது. ஆப் பூச்சி கட்டுப்பாட்டு ஆலோசனை, அறுவடை நேரம், வானிலை புதுப்பிப்புகள் மற்றும் உரப் பரிந்துரைகளையும் கொண்டுள்ளது ஆரோக்கியமான பயிர்களை உறுதிப்படுத்த.",
    btnMoreInfoGuide: "மேலும் தகவல்",
    featureInnovationsTitle: "நவீன பண்ணைகளுக்கான புதுமைகள்",
    featureInnovationsDesc: "ஸ்மார்ட் பயிர் டெக், துல்லியமான ஃபார்மிங், மற்றும் நிலையான மற்றும் திறமையான விவசாயத்திற்கான தனிப்பயன் தீர்வுகள்!",
    btnMoreInfoInnovations: "மேலும் தகவல்",
    featureInterfaceTitle: "பயனர்-நட்பு இடைமுகம்",
    featureInterfaceDesc: "எங்கள் பயன்பாடு அனைத்து தொழில்நுட்ப பின்னணிகளின் விவசாயிகளுக்காக வடிவமைக்கப்பட்ட பயனர்-நட்பு இடைமுகத்தை வழங்குகிறது. இடம் மற்றும் பயிர் தேர்வு போன்ற எளிய உள்ளீடுகளுடன், பயனர்கள் பயிர் பொருத்தம் மற்றும் பரிந்துரைக்கப்பட்ட நடவு அட்டவணைகளில் விரிவான தகவல்களை எளிதாக அணுகலாம்.",
    btnMoreInfoInterface: "மேலும் தகவல்",
    marketHeading: "நேரடி பயிர் சந்தை விலைகள்",
    marketDescription: "விவசாயிகளுக்கு விற்கும் சிறந்த நேரத்தைத் தீர்மானிக்க உதவும் நேரடி சந்தை பேனலுடன் பயிர் விலை இயக்கத்தைக் கண்காணிக்கவும்.",
    marketCardTitle: "சந்தை விலை கடிகாரம்",
    marketCardDesc: "சமீபத்திய சந்தை விலை மற்றும் உருவக விலை இயக்கத்தைப் பார்க்க ஒரு பயிரைத் தேர்ந்தெடுக்கவும்.",
    marketSelectLabel: "ஒரு பயிரைத் தேர்ந்தெடுக்கவும்",
    priceLabel: "தற்போதைய விலை",
    changeLabel: "24 மணி மாற்றம்",
    marketPriceUpdate: "இப்போது புதுப்பிக்கப்பட்டது",
    marketInfoTitle: "இது ஏன் பயனுள்ளது",
    marketInfoDesc: "சந்தை விலைகளை அறிவது உங்களுக்கு சரியான பயிரைத் தேர்ந்தெடுக்க, அறுவடை நேரத்தைத் திட்டமிட, மற்றும் வருவாயை அதிகரிக்க உதவுகிறது. விலைகள் நேரடி சந்தை இயக்கத்தை உருவகப்படுத்துவதற்கு தானாகவே புதுப்பிக்கப்படுகின்றன.",
    marketBenefit1: "பயிர் மதிப்புகளை உடனடியாக ஒப்பிடு",
    marketBenefit2: "தெளிவான போக்கு வண்ணத்துடன் விலை திசையைப் பார்",
    marketBenefit3: "ஸ்மார்ட்டர் விற்பனை முடிவுகளுக்கு சந்தை நுண்ணறிவைப் பயன்படுத்து",
    aboutHeading: "குழு உறுப்பினர்கள்",
    aboutDescription: "AgriSens திட்டத்தை வடிவமைக்கும் திறமையான நபர்களை அறிமுகப்படுத்துங்கள்.",
    footerQuickLinks: "விரைவு இணைப்புகள்",
    footerExtraLinks: "கூடுதல் இணைப்புகள்",
    footerHelpfulResources: "உதவியான வளங்கள்",
    footerStayConnected: "இணைந்திருங்கள்",
  },
};

const voiceTexts = {
  en: {
    voicePanelTitle: "Voice Assistant",
    voiceTap: "Tap mic to speak",
    voicePrompt: "Tap the microphone and speak your question.",
    voiceYouSaid: "You said:",
    voiceOutputTitle: "Recognized speech",
    voiceOutputWait: "Listening... speak clearly into the microphone.",
    voiceResponseUnknown: "I did not recognize that command. Please try again.",
    voiceListening: "Listening... please speak now.",
    voiceUnsupported: "Voice assistant is not supported in this browser.",
    voiceError: "Voice recognition error, please try again.",
    voiceResponseCrop: "Showing crop recommendation.",
    voiceResponseWeather: "Opening weather forecast.",
    voiceResponseMarket: "Showing market prices.",
    voiceResponseFertilizer: "Opening fertilizer recommendation.",
    voiceResponseSchemes: "Opening government schemes.",
    voiceResponseDisease: "Checking disease detection support.",
  },
  hi: {
    voicePanelTitle: "वॉयस असिस्टेंट",
    voiceTap: "माइक दबाएं और बोलें",
    voicePrompt: "माइक दबाएं और अपना सवाल बोलें।",
    voiceYouSaid: "आपने कहा:",
    voiceOutputTitle: "पहचानी गई आवाज",
    voiceOutputWait: "सुन रहा है... कृपया साफ़ बोलें।",
    voiceResponseUnknown: "मैं यह कमांड पहचान नहीं पाया। कृपया फिर से बोलें।",
    voiceListening: "सुन रहा है... अब बोलें।",
    voiceUnsupported: "इस ब्राउज़र में वॉयस असिस्टेंट समर्थित नहीं है।",
    voiceError: "वॉइस पहचान त्रुटि, फिर से प्रयास करें।",
    voiceResponseCrop: "फसल की सिफारिश दिखा रहा हूँ।",
    voiceResponseWeather: "मौसम पूर्वानुमान खोल रहा हूँ।",
    voiceResponseMarket: "बाजार कीमतें दिखा रहा हूँ।",
    voiceResponseFertilizer: "उर्वरक सिफारिश खोल रहा हूँ।",
    voiceResponseSchemes: "सरकारी योजनाएं खोल रहा हूँ।",
    voiceResponseDisease: "रोग पहचान समर्थन देख रहा हूँ।",
  },
  kn: {
    voicePanelTitle: "ವಾಯ್ಸ್ ಅಸಿಸ್ಟೆಂಟ್",
    voiceTap: "ಮೈಕ್ ಒತ್ತಿ ಮತ್ತು ಮಾತನಾಡಿ",
    voicePrompt: "ಮೈಕ್ ಒತ್ತি ಮತ್ತು ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಮಾತನಾಡಿ.",
    voiceYouSaid: "ನೀವು ಹೇಳಿದ್ದು:",
    voiceOutputTitle: "ಗುರುತಿಸಿದ ಧ್ವನಿ",
    voiceOutputWait: "ಶುಣಿಸುತ್ತಿದೆ... ದಯವಿಟ್ಟು ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡಿ.",
    voiceResponseUnknown: "ನಾನು ಆ ಕಮಾಂಡ್ ಅನ್ನು ಗುರುತಿಸಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    voiceListening: "ಶುಣಿಸುತ್ತಿದೆ... ಈಗ ಮಾತನಾಡಿ.",
    voiceUnsupported: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ವಾಯ್ಸ್ ಅಸಿಸ್ಟೆಂಟ್ ಬೆಂಬಲಿತವಲ್ಲ.",
    voiceError: "ವಾಯ್ಸ್ ಪತ್ತೆ ದೋಷ, ದಯವಿಟ್ಟು ಮರುಪ್ರಯತ್ನಿಸಿ.",
    voiceResponseCrop: "ಬೆಳೆ ಶಿಫಾರಸು ತೋರಿಸಲಾಗುತ್ತಿದೆ.",
    voiceResponseWeather: "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಯನ್ನು ತೆರೆಯಲಾಗುತ್ತಿದೆ.",
    voiceResponseMarket: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಯನ್ನು ತೋರಲಾಗುತ್ತಿದೆ.",
    voiceResponseFertilizer: "ಉರ್ವರಕ ಶಿಫಾರಸು ತೆರೆಯಲಾಗುತ್ತಿದೆ.",
    voiceResponseSchemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ತೆರೆಯಲಾಗುತ್ತಿದೆ.",
    voiceResponseDisease: "ರೋಗ ಪತ್ತೆ ಬೆಂಬಲ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ.",
  },
  te: {
    voicePanelTitle: "వాయిస్ అసిస్టెంట్",
    voiceTap: "మైక్ నొక్కి మాట్లాడండి",
    voicePrompt: "మైక్ నొక్కి మీ ప్రశ్నను చెప్పండి.",
    voiceYouSaid: "మీరు చెప్పారు:",
    voiceOutputTitle: "ఓరిజినల్ మాటలు",
    voiceOutputWait: "వింటోంది... దయచేసి స్పష్టంగా మాట్లాడండి.",
    voiceResponseUnknown: "ఈ ఆజ్ఞను గుర్తించలేకపోయాను. దయచేసి మళ్లీ ప్రయత్నించండి.",
    voiceListening: "వింటోంది... ఇప్పుడు మాట్లాడండి.",
    voiceUnsupported: "ఈ బ్రౌజర్‌లో వాయిస్ అసిస్టెంట్ లేదు.",
    voiceError: "వాయిస్ గుర్తింపు లోపం, దయచేసి మళ్లీ ప్రయత్నించండి.",
    voiceResponseCrop: "పంట సిఫార్సు చూపిస్తున్నాను.",
    voiceResponseWeather: "వాతావరణ సూచనని తెరవుతున్నాను.",
    voiceResponseMarket: "మార్కెట్ ధరలను చూపిస్తున్నాను.",
    voiceResponseFertilizer: "ఎరువుల సిఫార్సు తెరవుతున్నాను.",
    voiceResponseSchemes: "ప్రభుత్వ పథకాలను తెరవుతున్నాను.",
    voiceResponseDisease: "రోగ నిర్ధారణ సహాయం చెక్ చేస్తున్నాను.",
  },
  ta: {
    voicePanelTitle: "குரல் உதவியாளர்",
    voiceTap: "மைக் அழுத்தி பேசவும்",
    voicePrompt: "மைக் அழுத்தி உங்கள் கேள்வியை பேசவும்.",
    voiceYouSaid: "நீங்கள் கூறியது:",
    voiceOutputTitle: "அடையாளம் காணப்பட்ட பேச்சு",
    voiceOutputWait: "கேட்கப்படுகிறது... தெளிவாக பேசவும்.",
    voiceResponseUnknown: "இந்த கட்டளையை நான் அடையாளம் காணவில்லை. மீண்டும் முயற்சிக்கவும்.",
    voiceListening: "கேட்கப்படுகிறது... இப்போது பேசவும்.",
    voiceUnsupported: "இந்த உலாவியில் குரல் உதவியாளர் கிடையாது.",
    voiceError: "குரல் அடையாளம் பிழை, மீண்டும் முயற்சிக்கவும்.",
    voiceResponseCrop: "பயிர் பரிந்துரையை காட்டுகின்றேன்.",
    voiceResponseWeather: "காலநிலை முன்னறிவிப்பை திறக்கின்றேன்.",
    voiceResponseMarket: "மார்க்கெட் விலைகளை காட்டுகின்றேன்.",
    voiceResponseFertilizer: "உர பரிந்துரையை திறக்கின்றேன்.",
    voiceResponseSchemes: "அரசு திட்டங்களை திறக்கின்றேன்.",
    voiceResponseDisease: "நோய் கண்டறிதல் ஆதரவை சரிபார்க்கின்றேன்.",
  },
  mr: {
    voicePanelTitle: "वॉइस सहाय्यक",
    voiceTap: "माइक दाबा आणि बोला",
    voicePrompt: "माइक दाबा आणि आपला प्रश्न बोला.",
    voiceYouSaid: "आपण म्हणालात:",
    voiceOutputTitle: "ओळखलेले भाषण",
    voiceOutputWait: "ऐकत आहे... कृपया स्पष्टपणे बोला.",
    voiceResponseUnknown: "मी हा आदेश ओळखू शकलो नाही. कृपया पुन्हा प्रयत्न करा.",
    voiceListening: "ऐकत आहे... आता बोला.",
    voiceUnsupported: "हा ब्राउझर वॉइस सहाय्यकला समर्थन करत नाही.",
    voiceError: "वॉइस ओळख त्रुटी, कृपया पुन्हा प्रयत्न करा.",
    voiceResponseCrop: "पिक सिफारस दर्शवत आहे.",
    voiceResponseWeather: "हवामानाचा अहवाल उघडत आहे.",
    voiceResponseMarket: "बाजार भाव दाखवत आहे.",
    voiceResponseFertilizer: "खत सिफारस उघडत आहे.",
    voiceResponseSchemes: "सरकारी योजना उघडत आहे.",
    voiceResponseDisease: "रोग ओळख सहाय्य तपासत आहे.",
  },
};

const recognitionLanguages = {
  en: "en-US",
  hi: "hi-IN",
  kn: "kn-IN",
  te: "te-IN",
  ta: "ta-IN",
  mr: "mr-IN",
};

const commandTriggers = {
  en: {
    crop: ["crop", "crops", "suitable crops", "suggest suitable crops", "suggest crops"],
    weather: ["weather", "forecast", "rain", "temperature", "show weather"],
    market: ["market", "price", "prices", "market prices", "check market"],
    fertilizer: ["fertilizer", "fertiliser", "nutrient", "fertilizer recommendation"],
    schemes: ["scheme", "government", "subsidy", "insurance", "support", "government schemes"],
    disease: ["disease", "diseases", "plant disease", "disease detection", "identify disease"],
  },
  hi: {
    crop: ["फसल", "उपयुक्त फसल", "सुझाव"],
    weather: ["मौसम", "पूर्वानुमान", "बारिश", "तापमान"],
    market: ["बाजार", "मूल्य", "कीमत"],
    fertilizer: ["उर्वरक", "खाद", "सलाह"],
    schemes: ["योजना", "सरकारी", "सहायता", "बीमा", "सब्सिडी"],
    disease: ["रोग", "बीमारी", "रोग पहचान", "बीमारी पहचान", "प्लांट बीमारी"],
  },
  kn: {
    crop: ["ಬೆಳೆ", "ಸೂಚಿಸಿ", "ಉತ್ತಮ ಬೆಳೆ"],
    weather: ["ಹವಾಮಾನ", "ಮುನ್ನೆಚ್ಚರಿಕೆ", "ಮಳೆಯ"],
    market: ["ಮಾರುಕಟ್ಟೆ", "ಬೆಲೆ", "ಮೌಲ್ಯ"],
    fertilizer: ["ಉರ್ವರಕ", "ರಸಗೊಬ್ಬರ", "ಸಲಹೆ"],
    schemes: ["ಯೋಜನೆ", "ಸಹಾಯ", "ಬಿಮಾ", "ಸಬ್ಸಿಡಿ"],
    disease: ["ರೋಗ", "ಬಾಧೆ", "ರೋಗ ಗುರುತು", "ರೋಗ ಪತ್ತೆ", "ಸಸ್ಯ ರೋಗ"],
  },
  te: {
    crop: ["పంట", "సూచించు", "సరైన పంట"],
    weather: ["వాతావరణ", "మొసాము", "వర్షం", "తాపం"],
    market: ["మార్కెట్", "ధర", "విలువ"],
    fertilizer: ["ఎరువు", "ఉప్పు", "సలహా"],
    schemes: ["పథకం", "సహాయం", "వీమా", "సబ్సిడీ"],
    disease: ["రోగం", "మారుగు", "రోగ గుర్తింపు", "బాధ", "మొక్క రోగం"],
  },
  ta: {
    crop: ["பயிர்", "பரிந்துரை", "சரியான பயிர்"],
    weather: ["வானிலை", "முன்னறிவு", "மழை", "வெப்பநிலை"],
    market: ["சந்தை", "விலை", "மதிப்பு"],
    fertilizer: ["உரம்", "உரை", "சலுகை"],
    schemes: ["திட்டம்", "ஆதரவு", "காப்பீடு", "தள்ளுபடி"],
    disease: ["நோய்", "நோய்கள்", "தவிர்க்கப்பட்டது", "நோய் கண்டறிதல்", "மருந்து"],
  },
  mr: {
    crop: ["पिक", "उपयुक्त पिक", "सलाह"],
    weather: ["हवामान", "पाऊस", "तापमान"],
    market: ["बाजार", "किंमत", "मूल्य"],
    fertilizer: ["खत", "खताची", "सल्ला"],
    schemes: ["योजना", "सहाय्य", "विमा", "सबसिडी"],
    disease: ["रोग", "रुग्ण", "रोग ओळख", "पिक रोग", "रोग निदान"],
  },
};

const languageSelect = document.getElementById("languageSelect");
const navHome = document.getElementById("nav-home");
const navFeatures = document.getElementById("nav-features");
const navAbout = document.getElementById("nav-about");
const navContact = document.getElementById("nav-contact");
const navExplore = document.getElementById("nav-explore");

function updateLanguage(language) {
  const locale = translations[language] || translations.en;

  // Navbar
  navHome.textContent = locale.home;
  navFeatures.textContent = locale.features;
  navAbout.textContent = locale.about;
  navContact.textContent = locale.contact;
  navExplore.textContent = locale.explore;

  // Hero section
  document.getElementById("hero-title").textContent = locale.heroTitle;
  document.getElementById("hero-subtitle").textContent = locale.heroSubtitle;
  document.getElementById("hero-button").textContent = locale.heroButton;

  // Features section
  document.getElementById("features-heading").textContent = locale.featuresHeading;
  document.getElementById("features-description").textContent = locale.featuresDescription;

  // Buttons
  document.getElementById("btn-crop-rec").textContent = locale.btnCropRec;
  document.getElementById("btn-disease").textContent = locale.btnDisease;
  document.getElementById("btn-weather").textContent = locale.btnWeather;
  document.getElementById("btn-fertilizer").textContent = locale.btnFertilizer;
  document.getElementById("btn-guide").textContent = locale.btnGuide;

  // Feature titles and descriptions
  document.getElementById("feature-weather-title").textContent = locale.featureWeatherTitle;
  document.getElementById("feature-weather-desc").textContent = locale.featureWeatherDesc;
  document.getElementById("btn-more-info-weather").textContent = locale.btnMoreInfoWeather;

  document.getElementById("feature-planning-title").textContent = locale.featurePlanningTitle;
  document.getElementById("feature-planning-desc").textContent = locale.featurePlanningDesc;
  document.getElementById("btn-more-info-planning").textContent = locale.btnMoreInfoPlanning;

  document.getElementById("feature-disease-title").textContent = locale.featureDiseaseTitle;
  document.getElementById("feature-disease-desc").textContent = locale.featureDiseaseDesc;
  document.getElementById("btn-more-info-disease").textContent = locale.btnMoreInfoDisease;

  document.getElementById("feature-guide-title").textContent = locale.featureGuideTitle;
  document.getElementById("feature-guide-desc").textContent = locale.featureGuideDesc;
  document.getElementById("btn-more-info-guide").textContent = locale.btnMoreInfoGuide;

  document.getElementById("feature-innovations-title").textContent = locale.featureInnovationsTitle;
  document.getElementById("feature-innovations-desc").textContent = locale.featureInnovationsDesc;
  document.getElementById("btn-more-info-innovations").textContent = locale.btnMoreInfoInnovations;

  document.getElementById("feature-interface-title").textContent = locale.featureInterfaceTitle;
  document.getElementById("feature-interface-desc").textContent = locale.featureInterfaceDesc;
  document.getElementById("btn-more-info-interface").textContent = locale.btnMoreInfoInterface;

  // Market section
  document.getElementById("market-heading").textContent = locale.marketHeading;
  document.getElementById("market-description").textContent = locale.marketDescription;
  document.getElementById("market-card-title").textContent = locale.marketCardTitle;
  document.getElementById("market-card-desc").textContent = locale.marketCardDesc;
  document.getElementById("market-select-label").textContent = locale.marketSelectLabel;
  document.getElementById("price-label").textContent = locale.priceLabel;
  document.getElementById("change-label").textContent = locale.changeLabel;
  document.getElementById("market-price-update").textContent = locale.marketPriceUpdate;
  document.getElementById("market-info-title").textContent = locale.marketInfoTitle;
  document.getElementById("market-info-desc").textContent = locale.marketInfoDesc;
  document.getElementById("market-benefit-1").textContent = locale.marketBenefit1;
  document.getElementById("market-benefit-2").textContent = locale.marketBenefit2;
  document.getElementById("market-benefit-3").textContent = locale.marketBenefit3;

  // About section
  document.getElementById("about-heading").textContent = locale.aboutHeading;
  document.getElementById("about-description").textContent = locale.aboutDescription;

  // Voice assistant panel
  const voiceLocale = voiceTexts[language] || voiceTexts.en;
  document.getElementById("voice-status").textContent = voiceLocale.voiceTap;
  document.getElementById("voice-panel-title").textContent = voiceLocale.voicePanelTitle;
  document.getElementById("voice-text").textContent = voiceLocale.voicePrompt;
  document.getElementById("voice-response").textContent = voiceLocale.voiceResponseUnknown;
  document.getElementById("voice-output-label").textContent = voiceLocale.voiceOutputTitle;
  document.getElementById("voice-output-text").textContent = voiceLocale.voiceOutputWait;

  // Footer
  document.getElementById("footer-quick-links").textContent = locale.footerQuickLinks;
  document.getElementById("footer-extra-links").textContent = locale.footerExtraLinks;
  document.getElementById("footer-helpful-resources").textContent = locale.footerHelpfulResources;
  document.getElementById("footer-stay-connected").textContent = locale.footerStayConnected;
}

const voiceBtn = document.getElementById("voice-btn");
const voiceStatus = document.getElementById("voice-status");
const voiceText = document.getElementById("voice-text");
const voiceResponse = document.getElementById("voice-response");
const voiceOutputLabel = document.getElementById("voice-output-label");
const voiceOutputText = document.getElementById("voice-output-text");

const recognitionSupported = "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if (recognitionSupported && SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const currentLanguage = languageSelect.value;
    const voiceLocale = voiceTexts[currentLanguage] || voiceTexts.en;
    if (voiceOutputLabel) voiceOutputLabel.textContent = voiceLocale.voiceYouSaid;
    if (voiceOutputText) voiceOutputText.textContent = transcript;
    const response = getVoiceAnswer(transcript, currentLanguage);
    if (voiceResponse) voiceResponse.textContent = response;
    speakText(response, currentLanguage);
  };

  recognition.onend = () => {
    if (voiceBtn) voiceBtn.classList.remove("listening");
    const currentLanguage = languageSelect.value;
    const voiceLocale = voiceTexts[currentLanguage] || voiceTexts.en;
    if (voiceStatus) voiceStatus.textContent = voiceLocale.voiceTap;
  };

  recognition.onerror = (event) => {
    const currentLanguage = languageSelect.value;
    const voiceLocale = voiceTexts[currentLanguage] || voiceTexts.en;
    if (voiceStatus) voiceStatus.textContent = voiceLocale.voiceError;
    if (voiceResponse) voiceResponse.textContent = voiceLocale.voiceError;
  };
}

function getVoiceAnswer(text, language) {
  const lower = text.toLowerCase();
  const triggers = commandTriggers[language] || commandTriggers.en;
  const locale = voiceTexts[language] || voiceTexts.en;

  if (triggers.crop.some((keyword) => lower.includes(keyword))) {
    return locale.voiceResponseCrop;
  }
  if (triggers.weather.some((keyword) => lower.includes(keyword))) {
    return locale.voiceResponseWeather;
  }
  if (triggers.market.some((keyword) => lower.includes(keyword))) {
    return locale.voiceResponseMarket;
  }
  if (triggers.fertilizer.some((keyword) => lower.includes(keyword))) {
    return locale.voiceResponseFertilizer;
  }
  if (triggers.schemes.some((keyword) => lower.includes(keyword))) {
    return locale.voiceResponseSchemes;
  }
  if (triggers.disease && triggers.disease.some((keyword) => lower.includes(keyword))) {
    return locale.voiceResponseDisease;
  }
  return locale.voiceResponseUnknown;
}

function getRecognitionLanguage(language) {
  return recognitionLanguages[language] || recognitionLanguages.en;
}

function speakText(text, language) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = getRecognitionLanguage(language);
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function startVoiceRecognition() {
  if (!recognition) {
    const currentLanguage = languageSelect.value;
    const voiceLocale = voiceTexts[currentLanguage] || voiceTexts.en;
    if (voiceStatus) voiceStatus.textContent = voiceLocale.voiceUnsupported;
    return;
  }

  const currentLanguage = languageSelect.value;
  const voiceLocale = voiceTexts[currentLanguage] || voiceTexts.en;
  recognition.lang = getRecognitionLanguage(currentLanguage);
  if (voiceStatus) voiceStatus.textContent = voiceLocale.voiceListening;
  if (voiceOutputLabel) voiceOutputLabel.textContent = voiceLocale.voiceOutputTitle;
  if (voiceOutputText) voiceOutputText.textContent = voiceLocale.voiceOutputWait;
  if (voiceBtn) voiceBtn.classList.add("listening");
  recognition.start();
}

if (voiceBtn) {
  voiceBtn.addEventListener("click", () => {
    if (voiceBtn.classList.contains("listening")) {
      recognition && recognition.stop();
      return;
    }
    startVoiceRecognition();
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    updateLanguage(event.target.value);
  });
  updateLanguage(languageSelect.value);
}

const marketData = {
  Paddy: { price: 2100, change: 0 },
  Wheat: { price: 2200, change: 0 },
  Maize: { price: 1800, change: 0 },
  Sugarcane: { price: 3100, change: 0 },
  Cotton: { price: 2700, change: 0 },
  Tomato: { price: 4200, change: 0 },
  Potato: { price: 2500, change: 0 },
  Onion: { price: 2900, change: 0 },
};

const priceSelect = document.getElementById("market-price-select");
const priceValue = document.getElementById("market-price-value");
const priceChange = document.getElementById("market-price-change");
const priceUpdate = document.getElementById("market-price-update");
let selectedCrop = priceSelect ? priceSelect.value : "Paddy";

function formatPrice(value) {
  return `₹${value.toFixed(2)}/quintal`;
}

function updateMarketDisplay(crop) {
  if (!marketData[crop]) return;
  const { price, change } = marketData[crop];

  priceValue.textContent = formatPrice(price);
  priceChange.textContent = `${change >= 0 ? "+" : ""}${change.toFixed(2)}%`;
  priceChange.classList.toggle("positive", change >= 0);
  priceChange.classList.toggle("negative", change < 0);
  priceUpdate.textContent = `Last updated: ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
}

function tickMarketPrices() {
  Object.keys(marketData).forEach((crop) => {
    const randomChange = (Math.random() * 2 - 1).toFixed(2);
    const changeValue = Number(randomChange);
    const current = marketData[crop].price;
    const updated = current * (1 + changeValue / 100);
    marketData[crop].price = Math.max(500, updated);
    marketData[crop].change = changeValue;
  });
  updateMarketDisplay(selectedCrop);
}

if (priceSelect) {
  priceSelect.addEventListener("change", (event) => {
    selectedCrop = event.target.value;
    updateMarketDisplay(selectedCrop);
  });

  updateMarketDisplay(selectedCrop);
  setInterval(tickMarketPrices, 5000);
}

// Rental System Functions
function bookItem(itemName) {
  // Create a modal or alert for booking
  const bookingModal = document.createElement('div');
  bookingModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  `;

  bookingModal.innerHTML = `
    <div style="
      background: white;
      padding: 2rem;
      border-radius: 20px;
      max-width: 500px;
      width: 90%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    ">
      <h2 style="color: #2d5a2d; margin-bottom: 1rem;">Book ${itemName}</h2>
      <p style="color: #4a7c4a; margin-bottom: 2rem;">Enter your booking details to reserve this ${itemName.toLowerCase()}.</p>
      <form id="bookingForm">
        <input type="text" placeholder="Your Name" required style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1.4rem;">
        <input type="tel" placeholder="Phone Number" required style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1.4rem;">
        <input type="date" required style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1.4rem;">
        <input type="number" placeholder="Duration (days)" min="1" required style="width: 100%; padding: 1rem; margin-bottom: 2rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1.4rem;">
        <div style="display: flex; gap: 1rem; justify-content: center;">
          <button type="submit" style="background: #4CAF50; color: white; border: none; padding: 1rem 2rem; border-radius: 25px; font-size: 1.4rem; cursor: pointer;">Confirm Booking</button>
          <button type="button" onclick="this.closest('div').parentElement.remove()" style="background: #f44336; color: white; border: none; padding: 1rem 2rem; border-radius: 25px; font-size: 1.4rem; cursor: pointer;">Cancel</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(bookingModal);

  // Handle form submission
  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Booking request submitted successfully! The owner will contact you soon.');
    bookingModal.remove();
  });
}

function contactOwner(ownerName) {
  // Create contact modal
  const contactModal = document.createElement('div');
  contactModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  `;

  contactModal.innerHTML = `
    <div style="
      background: white;
      padding: 2rem;
      border-radius: 20px;
      max-width: 500px;
      width: 90%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    ">
      <h2 style="color: #2d5a2d; margin-bottom: 1rem;">Contact ${ownerName}</h2>
      <p style="color: #4a7c4a; margin-bottom: 2rem;">Get in touch with the owner for more details or to arrange viewing.</p>
      <div style="text-align: left; margin-bottom: 2rem;">
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> contact@${ownerName.toLowerCase().replace(/\s+/g, '')}.com</p>
        <p><strong>WhatsApp:</strong> +91 98765 43210</p>
      </div>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="tel:+919876543210" style="background: #4CAF50; color: white; text-decoration: none; padding: 1rem 2rem; border-radius: 25px; font-size: 1.4rem;">Call Now</a>
        <a href="https://wa.me/919876543210" target="_blank" style="background: #25D366; color: white; text-decoration: none; padding: 1rem 2rem; border-radius: 25px; font-size: 1.4rem;">WhatsApp</a>
        <button onclick="this.closest('div').parentElement.remove()" style="background: #f44336; color: white; border: none; padding: 1rem 2rem; border-radius: 25px; font-size: 1.4rem; cursor: pointer;">Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(contactModal);
}

function uploadMachine() {
  // Create upload modal
  const uploadModal = document.createElement('div');
  uploadModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  `;

  uploadModal.innerHTML = `
    <div style="
      background: white;
      padding: 2rem;
      border-radius: 20px;
      max-width: 600px;
      width: 90%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    ">
      <h2 style="color: #2d5a2d; margin-bottom: 1rem;">Upload Your Machine</h2>
      <p style="color: #4a7c4a; margin-bottom: 2rem;">List your agricultural equipment for rent and start earning passive income.</p>
      <form id="uploadForm">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <input type="text" placeholder="Machine Name" required style="padding: 1rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1.4rem;">
          <select required style="padding: 1rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1.4rem;">
            <option value="">Select Category</option>
            <option value="tractor">Tractor</option>
            <option value="harvester">Harvester</option>
            <option value="pump">Water Pump</option>
            <option value="sprayer">Sprayer</option>
            <option value="seeder">Seed Sowing Machine</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input type="text" placeholder="Daily Rental Price (₹)" required style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1.4rem;">
        <input type="text" placeholder="Location" required style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1.4rem;">
        <textarea placeholder="Machine Description" rows="3" style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1.4rem; resize: vertical;"></textarea>
        <input type="file" accept="image/*" required style="width: 100%; padding: 1rem; margin-bottom: 2rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1.4rem;">
        <div style="display: flex; gap: 1rem; justify-content: center;">
          <button type="submit" style="background: #4CAF50; color: white; border: none; padding: 1rem 2rem; border-radius: 25px; font-size: 1.4rem; cursor: pointer;">Upload & List</button>
          <button type="button" onclick="this.closest('div').parentElement.remove()" style="background: #f44336; color: white; border: none; padding: 1rem 2rem; border-radius: 25px; font-size: 1.4rem; cursor: pointer;">Cancel</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(uploadModal);

  // Handle form submission
  document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your machine has been listed successfully! You will start receiving rental requests soon.');
    uploadModal.remove();
  });
}

function learnMore() {
  // Create learn more modal
  const learnModal = document.createElement('div');
  learnModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  `;

  learnModal.innerHTML = `
    <div style="
      background: white;
      padding: 2rem;
      border-radius: 20px;
      max-width: 600px;
      width: 90%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      max-height: 80vh;
      overflow-y: auto;
    ">
      <h2 style="color: #2d5a2d; margin-bottom: 1rem;">Earn Through Rentals</h2>
      <p style="color: #4a7c4a; margin-bottom: 2rem;">Turn your idle agricultural equipment into a source of passive income.</p>
      <div style="text-align: left; margin-bottom: 2rem;">
        <h3 style="color: #2d5a2d;">How it works:</h3>
        <ul style="color: #4a7c4a; line-height: 1.8;">
          <li>📋 List your tractors, harvesters, or other farming equipment</li>
          <li>💰 Set your own rental prices and availability</li>
          <li>📞 Receive booking requests from nearby farmers</li>
          <li>💳 Get paid directly through secure transactions</li>
          <li>🔒 Enjoy peace of mind with our insurance coverage</li>
        </ul>
        <h3 style="color: #2d5a2d; margin-top: 2rem;">Benefits:</h3>
        <ul style="color: #4a7c4a; line-height: 1.8;">
          <li>💵 Generate additional income from unused equipment</li>
          <li>🌱 Support sustainable farming in your community</li>
          <li>🤝 Build connections with local farmers</li>
          <li>📈 Scale your rental business over time</li>
        </ul>
      </div>
      <div style="display: flex; gap: 1rem; justify-content: center;">
        <button onclick="uploadMachine(); this.closest('div').parentElement.remove()" style="background: #4CAF50; color: white; border: none; padding: 1rem 2rem; border-radius: 25px; font-size: 1.4rem; cursor: pointer;">Start Listing</button>
        <button onclick="this.closest('div').parentElement.remove()" style="background: #f44336; color: white; border: none; padding: 1rem 2rem; border-radius: 25px; font-size: 1.4rem; cursor: pointer;">Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(learnModal);
}

// Search and Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('rental-search');
  const categoryFilter = document.getElementById('category-filter');
  const locationFilter = document.getElementById('location-filter');
  const rentalCards = document.querySelectorAll('.rental-card');

  function filterCards() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const categoryValue = categoryFilter ? categoryFilter.value : 'all';
    const locationValue = locationFilter ? locationFilter.value : 'all';

    rentalCards.forEach(card => {
      const cardText = card.textContent.toLowerCase();
      const cardCategory = card.getAttribute('data-category');
      const cardLocation = card.getAttribute('data-location');

      const matchesSearch = cardText.includes(searchTerm);
      const matchesCategory = categoryValue === 'all' || cardCategory === categoryValue;
      const matchesLocation = locationValue === 'all' || cardLocation === locationValue;

      if (matchesSearch && matchesCategory && matchesLocation) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }
  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterCards);
  }
  if (locationFilter) {
    locationFilter.addEventListener('change', filterCards);
  }
});
