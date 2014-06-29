require 'rails/generators'

module Layout
  module Generators
    class NavigationGenerator < ::Rails::Generators::Base
      source_root File.expand_path("../templates", __FILE__)

      desc "Adds links to a navigation bar."

      # Add navigation links
      def add_navigation_links
        app = ::Rails.application
        ext = app.config.generators.options[:rails][:template_engine] || :erb
        copy_file "navigation_links.html.erb", "app/views/layouts/_navigation_links.html.erb"
        # ABOUT
        append_file 'app/views/layouts/_navigation_links.html.erb', "<li><%= link_to 'About', page_path('about') %></li>\n" if File.exists?("app/views/pages/about.html.#{ext}")
        # CONTACT
        append_file 'app/views/layouts/_navigation_links.html.erb', "<li><%= link_to 'Contact', new_contact_path %></li>\n" if File.exists?("app/views/contacts/new.html.#{ext}")
        # DEVISE
        if File.exists?('config/initializers/devise.rb')
          append_file 'app/views/layouts/_navigation_links.html.erb' do <<-LINKS
<% if user_signed_in? %>
  <li><%= link_to 'Edit account', edit_user_registration_path %></li>
  <li><%= link_to 'Sign out', destroy_user_session_path, :method=>'delete' %></li>
<% else %>
  <li><%= link_to 'Sign in', new_user_session_path %></li>
  <li><%= link_to 'Sign up', new_user_registration_path %></li>
<% end %>
LINKS
          end
        end
        # USERS
        if Object.const_defined?('User')
          if User.column_names.include? 'role'
            # suitable for role-based authorization
            if Dir.glob("app/views/users/index.html.{#{ext},erb}").any?
              append_file 'app/views/layouts/_navigation_links.html.erb' do <<-LINKS
<% if user_signed_in? %>
  <% if current_user.admin? %>
    <li><%= link_to 'Users', users_path %></li>
  <% end %>
<% end %>
LINKS
              end
            end
          else
            # suitable for simple authentication
            if Dir.glob("app/views/users/index.html.{#{ext},erb}").any?
              append_file 'app/views/layouts/_navigation_links.html.erb' do <<-LINKS
<% if user_signed_in? %>
  <li><%= link_to 'Users', users_path %></li>
<% end %>
LINKS
              end
            end
          end
        end
        # OMNIAUTH
        if File.exists?('config/initializers/omniauth.rb')
          append_file 'app/views/layouts/_navigation_links.html.erb' do <<-LINKS
<% if user_signed_in? %>
  <li><%= link_to 'Sign out', signout_path %></li>
<% else %>
  <li><%= link_to 'Sign in', signin_path %></li>
<% end %>
LINKS
          end
        end
      end

      def add_tests
        return unless File.exists?('config/initializers/devise.rb')
        return unless File.exists?('spec/spec_helper.rb')
        copy_file 'navigation_spec.rb', 'spec/features/visitors/navigation_spec.rb'
      end

    end
  end
end