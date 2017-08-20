class AddTagIdToEmails < ActiveRecord::Migration[5.1]
  def change
    add_column :emails, :tag_id, :integer
  end
end
