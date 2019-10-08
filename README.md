# Seach Bar

What are we building?

Data:
JSON Object

[
{
"name":"Tacos"
},
{
"name":"Tarry"
},
{
"name":"Seth"
},
{
"name":"Harry"
}
]

^Simple Example

User Input: some string

Loop through array
If value at name contains (case insensitive) user input, push to searchResults

Components:

0. App
   -contains Search Bar
   -contains Results

STATE:
[results, setResults][data, setdata]

function findResults(userinput)
results = data.filter(obj => obj.name.includes(/userinput/i))
change state to results

pass findResults to searchBar
pass results to results

1. SearchBar
   -input field

2) Results ({results})

results.map(obj => <p>{obj.name}</p>)
