package com.example.italobrunes_viniciusbarbosa

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
    fun login (view: View) {
      val email = findViewById<EditText>(R.id.log_email).text.toString()
        val senha = findViewById<EditText>(R.id.log_senha).text.toString()

        if (email == "lucas@hotmail.com" && senha == "abc123@" ) {
          Toast.makeText(this, "logado com sucesso" , Toast.LENGTH_SHORT). show()

            // Abrindo HomeActivity
            val intent = Intent(this, HomeActivity::class.java)
            StartActivity(intent)
            finish() // opcional, evita voltar para o login

        } else {
            Toast.makeText(this, "Email ou senha inválidos", Toast.LENGHT.SHORT).show{}
        }



    }
}



        }
    }
}