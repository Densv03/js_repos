let a;
words = words.split('');
for (let i = 0; i < words.length; ++i)
    if (words[i] == ' ') {
        a = i + 1;
        break;
    }
    [words[0], words[a]] = [words[a], words[0]];
words = words.join('');
return words;