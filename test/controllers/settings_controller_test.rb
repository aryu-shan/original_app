require "test_helper"

class SettingsControllerTest < ActionDispatch::IntegrationTest
  test "should get romaji" do
    get settings_romaji_url
    assert_response :success
  end

  test "should get kana" do
    get settings_kana_url
    assert_response :success
  end
end
