class Item < ApplicationRecord
  validates :rsid, presence: true
  validates :examine, presence: true
  validates :members, presence: true
  validates :limit, presence: true
  validates :value, presence: true
  validates :highalch, presence: true
  validates :lowalch, presence: true
  validates :icon, presence: true
  validates :name, presence: true
end