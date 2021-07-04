class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :rsid, null: false
      t.string :examine, null: false
      t.boolean :members, null: false
      t.integer :limit, null: false
      t.integer :value, null: false
      t.integer :highalch, null: false
      t.integer :lowalch, null: false
      t.string :icon, null: false
      t.string :name, null: false
    end
  end
end
