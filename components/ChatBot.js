// This component is the AI Chatbot for answering Africa travel questions
function ChatBot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
  {
    text: "Hi there! I'm your Africa Travel Assistant. Ask me anything about traveling in Africa!",
    sender: "bot"
  }]
  );
  const [inputText, setInputText] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef(null);

  // Knowledge base for Africa travel information
  const knowledgeBase = {
    "visa": "Many African countries require visas for visitors. Requirements vary by country and your nationality. It's best to check with the specific embassy or consulate of the country you plan to visit at least 1-3 months before your trip.",

    "safari": "Africa offers incredible safari experiences in countries like Kenya, Tanzania, South Africa, Botswana, and Zimbabwe. The best time for safaris is typically during the dry season when animals gather around water sources (varies by region but often May-October).",

    "best time": "The best time to visit Africa depends on the region and your interests. For wildlife viewing, dry seasons are generally best (varies by country). Northern Africa is pleasant in spring (March-May) and fall (September-November). Consider avoiding the height of rainy seasons for better travel conditions.",

    "vaccination": "Common vaccinations for Africa travel include Yellow Fever (required for entry to many countries), Typhoid, Hepatitis A & B, Tetanus, and Meningitis. Malaria prevention medication is also recommended for many regions. Consult with a travel doctor 4-8 weeks before your trip.",

    "languages": "Africa has incredible linguistic diversity with over 2,000 languages. Common languages include Arabic (North Africa), French (West/Central Africa), English (various countries including South Africa, Kenya, Nigeria), Portuguese (Angola, Mozambique), and Swahili (East Africa).",

    "currency": "Currency varies by country. Some examples include: South African Rand, Egyptian Pound, Moroccan Dirham, Kenyan Shilling, and Nigerian Naira. Many tourist areas accept US dollars or Euros, but local currency is typically preferred for small purchases.",

    "safety": "Safety varies greatly by country and region. Research your specific destination, stay informed about current conditions, register with your embassy, avoid isolated areas at night, use reputable tour operators, and maintain awareness of your surroundings.",

    "food": "African cuisine is incredibly diverse! Popular dishes include Moroccan tagine, Ethiopian injera with stews, South African bobotie, Nigerian jollof rice, Kenyan nyama choma (grilled meat), and Egyptian koshari. Street food can be delicious but choose busy stalls with high turnover.",

    "accommodation": "Africa offers accommodation for every budget - from luxury safari lodges and beach resorts to mid-range hotels and budget hostels. Book in advance during high season, especially for popular safari destinations.",

    "transport": "Transportation options include flights between major cities, trains in some regions (like South Africa), buses (varying in comfort/reliability), shared taxis, and car rentals. For remote areas, organized tours often provide the best access.",

    "weather": "Africa's climate varies dramatically by region. North Africa has Mediterranean climate with hot summers and mild winters. Central Africa is typically hot and humid. Southern Africa has distinct seasons with mild winters. East Africa has wet and dry seasons that affect safari conditions.",

    "wildlife": "Africa boasts incredible wildlife including the 'Big Five' (lion, leopard, rhino, elephant, buffalo), as well as giraffes, zebras, cheetahs, gorillas, thousands of bird species, and much more. The best viewing is in protected national parks and reserves.",

    "cultural": "Africa has rich cultural traditions including music, dance, art, and ceremonies. When visiting cultural sites or communities, dress modestly, ask permission before taking photos, respect religious customs, and consider hiring local guides for deeper understanding.",

    "beaches": "Africa has stunning beaches along its extensive coastlines. Popular beach destinations include Zanzibar (Tanzania), Seychelles, Mauritius, Cape Town (South Africa), Diani Beach (Kenya), and various spots in Morocco, Egypt, and Mozambique.",

    "hiking": "Great hiking destinations include Mount Kilimanjaro (Tanzania), Atlas Mountains (Morocco), Mount Kenya, Table Mountain (South Africa), Drakensberg Mountains (South Africa/Lesotho), Simien Mountains (Ethiopia), and many national parks.",

    "budget": "Travel costs vary widely. Budget travelers can get by on $30-50/day in many countries staying in hostels and using public transport. Mid-range travel is typically $100-200/day. Luxury safaris and accommodations can cost $500+ per day.",

    "itinerary": "Popular itineraries include: Kenya & Tanzania safari circuit, Morocco's imperial cities, South Africa's Garden Route, Ethiopia's historic north, Egypt's Nile journey, and Ghana-Togo-Benin cultural circuit. Most travelers focus on one region rather than trying to cover too much distance."
  };

  // Function to scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to generate AI response
  const generateResponse = (userQuestion) => {
    const question = userQuestion.toLowerCase();
    let response = "I'm not sure about that. Could you try asking about visas, safari, best time to visit, vaccinations, languages, currency, safety, food, accommodation, transportation, weather, wildlife, cultural etiquette, beaches, hiking, budget travel, or suggested itineraries?";

    // Check knowledge base for matching keywords
    Object.keys(knowledgeBase).forEach((keyword) => {
      if (question.includes(keyword)) {
        response = knowledgeBase[keyword];
      }
    });

    // Additional specific matching for common questions
    if (question.includes("hello") || question.includes("hi") || question.includes("hey")) {
      response = "Hello! How can I help with your Africa travel questions today?";
    } else if (question.includes("thank")) {
      response = "You're welcome! Feel free to ask if you have more questions about traveling in Africa.";
    } else if (question.includes("cost") || question.includes("expensive") || question.includes("cheap")) {
      response = knowledgeBase["budget"];
    } else if (question.includes("when") && question.includes("visit")) {
      response = knowledgeBase["best time"];
    } else if (question.includes("health") || question.includes("medicine") || question.includes("shots")) {
      response = knowledgeBase["vaccination"];
    } else if (question.includes("money") || question.includes("cash") || question.includes("pay")) {
      response = knowledgeBase["currency"];
    } else if (question.includes("danger") || question.includes("secure") || question.includes("risky")) {
      response = knowledgeBase["safety"];
    } else if (question.includes("eat") || question.includes("cuisine") || question.includes("dish")) {
      response = knowledgeBase["food"];
    } else if (question.includes("animal") || question.includes("lion") || question.includes("elephant")) {
      response = knowledgeBase["wildlife"];
    } else if (question.includes("culture") || question.includes("tradition") || question.includes("custom")) {
      response = knowledgeBase["cultural"];
    } else if (question.includes("hotel") || question.includes("stay") || question.includes("lodge")) {
      response = knowledgeBase["accommodation"];
    } else if (question.includes("travel") && (question.includes("around") || question.includes("between"))) {
      response = knowledgeBase["transport"];
    } else if (question.includes("weather") || question.includes("rain") || question.includes("season")) {
      response = knowledgeBase["weather"];
    }

    return response;
  };

  // Handle sending messages
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    // Add user message
    const userMessage = { text: inputText, sender: "user" };
    setMessages([...messages, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI thinking and typing
    setTimeout(() => {
      const botResponse = { text: generateResponse(inputText), sender: "bot" };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50" data-id="1sv7ibt70" data-path="components/ChatBot.js">
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-all"
        aria-label={isOpen ? "Close chat" : "Open chat"} data-id="grbd055iu" data-path="components/ChatBot.js">

        {isOpen ?
        <i className="fas fa-times text-xl" data-id="pg3cn2rki" data-path="components/ChatBot.js"></i> :

        <i className="fas fa-comments text-xl" data-id="8mw91leqh" data-path="components/ChatBot.js"></i>
        }
      </button>
      
      {/* Chat window */}
      {isOpen &&
      <div className="absolute bottom-16 right-0 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200" data-id="ix1hb4f1w" data-path="components/ChatBot.js">
          {/* Chat header */}
          <div className="bg-primary text-white p-3 flex items-center" data-id="7mc2pqa3f" data-path="components/ChatBot.js">
            <i className="fas fa-robot mr-2" data-id="mkkorxv79" data-path="components/ChatBot.js"></i>
            <h3 className="font-semibold" data-id="xnr4ckzqm" data-path="components/ChatBot.js">Africa Travel Assistant</h3>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50" data-id="l4ztxs6v2" data-path="components/ChatBot.js">
            {messages.map((message, index) =>
          <div
            key={index}
            className={`mb-3 max-w-[80%] ${message.sender === 'user' ? 'ml-auto' : 'mr-auto'}`} data-id="hy5539ai9" data-path="components/ChatBot.js">

                <div
              className={`p-3 rounded-lg ${
              message.sender === 'user' ?
              'bg-primary text-white rounded-tr-none' :
              'bg-gray-200 text-dark rounded-tl-none'}`
              } data-id="isb7o276s" data-path="components/ChatBot.js">

                  {message.text}
                </div>
              </div>
          )}
            {isTyping &&
          <div className="mb-3 max-w-[80%] mr-auto" data-id="kyhaqdap9" data-path="components/ChatBot.js">
                <div className="p-3 rounded-lg bg-gray-200 text-dark rounded-tl-none" data-id="2a1mq84dl" data-path="components/ChatBot.js">
                  <div className="flex space-x-1" data-id="dxq7kioav" data-path="components/ChatBot.js">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" data-id="qgphrg162" data-path="components/ChatBot.js"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} data-id="4yaalozfe" data-path="components/ChatBot.js"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} data-id="kl2fnehg6" data-path="components/ChatBot.js"></div>
                  </div>
                </div>
              </div>
          }
            <div ref={messagesEndRef} data-id="nfj7mvvd6" data-path="components/ChatBot.js" />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex" data-id="qednb387h" data-path="components/ChatBot.js">
            <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about Africa travel..."
            className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:border-primary" data-id="q9dft5ott" data-path="components/ChatBot.js" />

            <button
            type="submit"
            className="bg-primary text-white px-4 rounded-r-lg hover:bg-opacity-90"
            disabled={inputText.trim() === ""} data-id="inj7i5aha" data-path="components/ChatBot.js">

              <i className="fas fa-paper-plane" data-id="p3tnus1rb" data-path="components/ChatBot.js"></i>
            </button>
          </form>
        </div>
      }
    </div>);

}