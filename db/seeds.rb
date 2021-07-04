# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# itemNamesHash = File.read("/Users/Josh/tests/runescape_api_tests/db/items.json")
response = Faraday.get("https://prices.runescape.wiki/api/v1/osrs/mapping")
item_map = JSON.parse(response.body)
latest_prices_response = Faraday.get("https://prices.runescape.wiki/api/v1/osrs/5m")
latest_prices = JSON.parse(latest_prices_response.body)["data"]

item_map.each do |item|
  Item.create(
    rsid: item["id"],
    examine: item["examine"],
    members: item["members"],
    limit: item["limit"],
    value: item["value"],
    highalch: item["highalch"],
    lowalch: item["lowalch"],
    icon: item["icon"],
    name: item["name"]
  )
end

