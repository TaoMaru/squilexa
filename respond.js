const responses = [
    "WOOMY!",
    "BOOYAH!",
    "VEEMO!"
]

export function getResponse() {
    const responseIndex = Math.floor(Math.random() * (responses.length - 1))
    return responses[responseIndex]
}