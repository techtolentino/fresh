# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "rambling-slider-rails"
  s.version = "0.2.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Edgar Gonzalez"]
  s.date = "2013-06-08"
  s.description = "The rambling-slider-rails is a gem aimed to automate the usage of the jQuery Rambling Slider within a Rails application."
  s.email = ["edggonzalezg@gmail.com"]
  s.homepage = "http://github.com/ramblinglabs/rambling-slider-rails"
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.14"
  s.summary = "Automate usage of jQuery Rambling Slider within Rails."

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jquery-rails>, ["<= 3.1.0", ">= 2.0.0"])
    else
      s.add_dependency(%q<jquery-rails>, ["<= 3.1.0", ">= 2.0.0"])
    end
  else
    s.add_dependency(%q<jquery-rails>, ["<= 3.1.0", ">= 2.0.0"])
  end
end
