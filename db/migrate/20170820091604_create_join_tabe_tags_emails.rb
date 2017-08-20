class CreateJoinTabeTagsEmails < ActiveRecord::Migration[5.1]
  def change
    create_table :join_tabe_tags_emails do |t|
      t.string :tag
      t.string :email
    end
  end
end
