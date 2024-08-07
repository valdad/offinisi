const SORT_BY_CHANNEL_INDEX = ["channel1", "channel2", "channel3"];

function isChannelIndexAvailable(index) {
    return index in SORT_BY_CHANNEL_INDEX;
}

console.log(isChannelIndexAvailable(0));  // Output: true
console.log(isChannelIndexAvailable(3));  // Output: false
