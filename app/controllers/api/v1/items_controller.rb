require_relative "./price_analyzer.rb"

class Api::V1::ItemsController < ApplicationController
  def index
    PriceAnalyzer.scrape
  end
end